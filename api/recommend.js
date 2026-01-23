// Vercel Serverless Function - Gemini AI Recommendations
// This enhances the existing scoring with AI-powered insights

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { answers, topRecommendations } = req.body;

        // Build context about user's needs
        const userContext = buildUserContext(answers);
        
        // Build info about top recommendations
        const recsContext = topRecommendations
            .slice(0, 3)
            .map((r, i) => `${i + 1}. ${r.name}: ${r.tagline}`)
            .join('\n');

        const prompt = `You are a helpful web mapping expert. A developer is choosing a mapping library for their project.

Their requirements:
${userContext}

Based on our scoring system, their top recommendations are:
${recsContext}

Please provide:
1. A brief (2-3 sentence) personalized summary of why the #1 choice is best for them
2. One specific tip or consideration for getting started with that library
3. If relevant, mention when they might want to consider the #2 choice instead

Keep your response concise and practical. Use a friendly, expert tone. Do not use markdown formatting.`;

        // Call Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 300,
                    }
                })
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error('Gemini API error:', error);
            return res.status(500).json({ error: 'Failed to get AI recommendations' });
        }

        const data = await response.json();
        const aiInsight = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        return res.status(200).json({ 
            insight: aiInsight,
            success: true 
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

function buildUserContext(answers) {
    const contexts = [];

    // Skill level
    const skillLabels = {
        beginner: 'beginner web developer (knows basic HTML/CSS/JS)',
        intermediate: 'intermediate developer (comfortable with JavaScript frameworks)',
        advanced: 'advanced developer (works professionally with modern frameworks)'
    };
    if (answers.skill_level) {
        contexts.push(`- Skill level: ${skillLabels[answers.skill_level]}`);
    }

    // Data sources
    if (answers.data_sources?.length) {
        const sourceLabels = {
            geojson: 'GeoJSON files',
            csv: 'CSV/spreadsheets',
            api: 'live APIs',
            tiles: 'tile services',
            shapefile: 'shapefiles/GIS formats',
            database: 'spatial databases'
        };
        const sources = answers.data_sources.map(s => sourceLabels[s] || s).join(', ');
        contexts.push(`- Data sources: ${sources}`);
    }

    // Data volume
    const volumeLabels = {
        small: 'small (under 1,000 features)',
        medium: 'medium (1,000-50,000 features)',
        large: 'large (50,000+ features)'
    };
    if (answers.data_volume) {
        contexts.push(`- Data volume: ${volumeLabels[answers.data_volume]}`);
    }

    // Features needed
    if (answers.features?.length) {
        const featureLabels = {
            markers: 'markers/popups',
            clustering: 'marker clustering',
            heatmaps: 'heatmaps',
            drawing: 'user drawing/editing',
            routing: 'routing/directions',
            '3d': '3D visualization',
            animations: 'animations',
            offline: 'offline support'
        };
        const features = answers.features.map(f => featureLabels[f] || f).join(', ');
        contexts.push(`- Features needed: ${features}`);
    }

    // Basemap styling
    const basemapLabels = {
        default: 'default styles are fine',
        themed: 'wants pre-made themes (dark mode, etc.)',
        custom: 'needs full style customization'
    };
    if (answers.basemap) {
        contexts.push(`- Map styling: ${basemapLabels[answers.basemap]}`);
    }

    return contexts.join('\n');
}
