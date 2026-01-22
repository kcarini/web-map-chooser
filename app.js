// ===================================
// Questions Configuration
// ===================================
const questions = [
    {
        id: 'skill_level',
        title: 'What\'s your web development experience?',
        description: 'Be honest — this helps us find tools that match your comfort level.',
        type: 'single',
        options: [
            {
                value: 'beginner',
                title: 'Beginner',
                description: 'I know basic HTML/CSS, maybe some JavaScript',
                icon: '🌱'
            },
            {
                value: 'intermediate',
                title: 'Intermediate',
                description: 'I\'m comfortable with JavaScript and have built web apps',
                icon: '🌿'
            },
            {
                value: 'advanced',
                title: 'Advanced',
                description: 'I work with modern frameworks (React, Vue, etc.) professionally',
                icon: '🌳'
            }
        ]
    },
    {
        id: 'data_sources',
        title: 'What type of data will you be mapping?',
        description: 'Select all that apply to your project.',
        type: 'multi',
        options: [
            {
                value: 'geojson',
                title: 'GeoJSON / JSON files',
                description: 'Standard geographic data format',
                icon: '📄'
            },
            {
                value: 'csv',
                title: 'CSV / Spreadsheets',
                description: 'Data with latitude/longitude columns',
                icon: '📊'
            },
            {
                value: 'api',
                title: 'Live API data',
                description: 'Real-time feeds, REST APIs, WebSockets',
                icon: '🔌'
            },
            {
                value: 'tiles',
                title: 'Tile services / WMS',
                description: 'Raster or vector tile layers',
                icon: '🗂️'
            },
            {
                value: 'shapefile',
                title: 'Shapefiles / GIS formats',
                description: 'Professional GIS data (SHP, GDB, KML)',
                icon: '🗃️'
            },
            {
                value: 'database',
                title: 'Spatial database',
                description: 'PostGIS, MongoDB, or similar',
                icon: '🗄️'
            }
        ]
    },
    {
        id: 'data_volume',
        title: 'How much data are you working with?',
        description: 'This affects which libraries can handle your needs efficiently.',
        type: 'single',
        options: [
            {
                value: 'small',
                title: 'Small (< 1,000 features)',
                description: 'A handful of markers or simple polygons',
                icon: '📍'
            },
            {
                value: 'medium',
                title: 'Medium (1,000 - 50,000 features)',
                description: 'Significant dataset, needs some optimization',
                icon: '📌'
            },
            {
                value: 'large',
                title: 'Large (50,000+ features)',
                description: 'Big data visualization, needs performance focus',
                icon: '🗺️'
            }
        ]
    },
    {
        id: 'features',
        title: 'What features do you need?',
        description: 'Select all the capabilities your map should have.',
        type: 'multi',
        options: [
            {
                value: 'markers',
                title: 'Basic markers & popups',
                description: 'Points on the map with info windows',
                icon: '📍'
            },
            {
                value: 'clustering',
                title: 'Marker clustering',
                description: 'Group nearby points together',
                icon: '🔵'
            },
            {
                value: 'heatmaps',
                title: 'Heatmaps',
                description: 'Density visualization',
                icon: '🌡️'
            },
            {
                value: 'drawing',
                title: 'User drawing/editing',
                description: 'Let users create shapes on the map',
                icon: '✏️'
            },
            {
                value: 'routing',
                title: 'Routing / Directions',
                description: 'Calculate routes between points',
                icon: '🛣️'
            },
            {
                value: '3d',
                title: '3D visualization',
                description: 'Extruded buildings, terrain, 3D models',
                icon: '🏙️'
            },
            {
                value: 'animations',
                title: 'Animations',
                description: 'Animated markers, transitions, time series',
                icon: '✨'
            },
            {
                value: 'offline',
                title: 'Offline support',
                description: 'Work without internet connection',
                icon: '📴'
            }
        ]
    },
    {
        id: 'basemap',
        title: 'Do you need custom map styling?',
        description: 'Some tools offer more control over how the base map looks.',
        type: 'single',
        options: [
            {
                value: 'default',
                title: 'Default styles are fine',
                description: 'Standard OpenStreetMap or similar',
                icon: '🗺️'
            },
            {
                value: 'themed',
                title: 'Pre-made themes',
                description: 'Dark mode, satellite, terrain options',
                icon: '🎨'
            },
            {
                value: 'custom',
                title: 'Full customization',
                description: 'Custom colors, fonts, and map elements',
                icon: '🖌️'
            }
        ]
    },
];

// ===================================
// Mapping Libraries Database
// ===================================
const libraries = {
    leaflet: {
        name: 'Leaflet',
        tagline: 'The lightweight champion for simple, beautiful maps',
        url: 'https://leafletjs.com',
        docs: 'https://leafletjs.com/reference.html',
        tags: ['Open Source', 'Lightweight', 'Beginner Friendly', 'Mobile Ready'],
        strengths: [
            'Extremely easy to learn and use',
            'Lightweight (~40KB gzipped)',
            'Huge plugin ecosystem',
            'Great documentation'
        ],
        scores: {
            skill_level: { beginner: 10, intermediate: 8, advanced: 6 },
            data_sources: { geojson: 10, csv: 7, api: 7, tiles: 9, shapefile: 4, database: 5 },
            data_volume: { small: 10, medium: 6, large: 3 },
            features: { markers: 10, clustering: 8, heatmaps: 7, drawing: 8, routing: 6, '3d': 2, animations: 5, offline: 7 },
            basemap: { default: 10, themed: 7, custom: 4 }
        }
    },
    openlayers: {
        name: 'OpenLayers',
        tagline: 'Full-featured GIS toolkit for complex applications',
        url: 'https://openlayers.org',
        docs: 'https://openlayers.org/en/latest/apidoc/',
        tags: ['Open Source', 'GIS-Grade', 'Full Featured', 'OGC Standards'],
        strengths: [
            'Supports virtually every map format',
            'Professional GIS capabilities',
            'OGC standards compliant (WMS, WFS, etc.)',
            'No usage limits or API keys needed'
        ],
        scores: {
            skill_level: { beginner: 3, intermediate: 7, advanced: 10 },
            data_sources: { geojson: 10, csv: 6, api: 9, tiles: 10, shapefile: 8, database: 8 },
            data_volume: { small: 8, medium: 9, large: 8 },
            features: { markers: 9, clustering: 8, heatmaps: 7, drawing: 10, routing: 5, '3d': 6, animations: 7, offline: 8 },
            basemap: { default: 8, themed: 7, custom: 8 }
        }
    },
    deckgl: {
        name: 'deck.gl',
        tagline: 'WebGL-powered large-scale data visualization',
        url: 'https://deck.gl',
        docs: 'https://deck.gl/docs',
        tags: ['Big Data', 'WebGL', 'React Ready', 'Uber Engineering'],
        strengths: [
            'Handles millions of data points smoothly',
            'Beautiful data visualization layers',
            'Great React/Mapbox integration',
            'GPU-accelerated rendering'
        ],
        scores: {
            skill_level: { beginner: 2, intermediate: 6, advanced: 10 },
            data_sources: { geojson: 10, csv: 9, api: 10, tiles: 8, shapefile: 5, database: 9 },
            data_volume: { small: 6, medium: 9, large: 10 },
            features: { markers: 7, clustering: 8, heatmaps: 10, drawing: 4, routing: 4, '3d': 10, animations: 10, offline: 3 },
            basemap: { default: 7, themed: 8, custom: 8 }
        }
    },
    keplergl: {
        name: 'Kepler.gl',
        tagline: 'No-code geospatial data visualization',
        url: 'https://kepler.gl',
        docs: 'https://docs.kepler.gl',
        tags: ['No Code', 'Data Viz', 'Drag & Drop', 'Uber Engineering'],
        strengths: [
            'No coding required for basic use',
            'Drag-and-drop data import',
            'Beautiful default visualizations',
            'Export to image or embed code'
        ],
        scores: {
            skill_level: { beginner: 10, intermediate: 8, advanced: 5 },
            data_sources: { geojson: 10, csv: 10, api: 3, tiles: 5, shapefile: 4, database: 3 },
            data_volume: { small: 9, medium: 10, large: 9 },
            features: { markers: 8, clustering: 8, heatmaps: 10, drawing: 3, routing: 2, '3d': 9, animations: 9, offline: 2 },
            basemap: { default: 8, themed: 9, custom: 5 }
        }
    },
    cesium: {
        name: 'CesiumJS',
        tagline: '3D globes and geospatial visualization',
        url: 'https://cesium.com/cesiumjs/',
        docs: 'https://cesium.com/learn/cesiumjs/ref-doc/',
        tags: ['3D Globe', 'Terrain', 'Time Series', 'Aerospace'],
        strengths: [
            'True 3D globe visualization',
            'High-precision terrain rendering',
            'Time-dynamic data support',
            'Industry standard for aerospace/defense'
        ],
        scores: {
            skill_level: { beginner: 3, intermediate: 6, advanced: 10 },
            data_sources: { geojson: 9, csv: 5, api: 9, tiles: 10, shapefile: 7, database: 7 },
            data_volume: { small: 8, medium: 9, large: 9 },
            features: { markers: 8, clustering: 6, heatmaps: 6, drawing: 7, routing: 5, '3d': 10, animations: 10, offline: 5 },
            basemap: { default: 8, themed: 8, custom: 9 }
        }
    },
    maplibre: {
        name: 'MapLibre GL JS',
        tagline: 'Open-source fork of Mapbox GL with no strings attached',
        url: 'https://maplibre.org',
        docs: 'https://maplibre.org/maplibre-gl-js/docs/',
        tags: ['Open Source', 'Vector Tiles', 'Mapbox Compatible', 'Community'],
        strengths: [
            'No API key or usage limits',
            'Compatible with Mapbox styles',
            'Active open-source community',
            'Self-hostable tile infrastructure'
        ],
        scores: {
            skill_level: { beginner: 5, intermediate: 9, advanced: 10 },
            data_sources: { geojson: 10, csv: 6, api: 9, tiles: 10, shapefile: 5, database: 7 },
            data_volume: { small: 9, medium: 10, large: 9 },
            features: { markers: 9, clustering: 9, heatmaps: 9, drawing: 7, routing: 5, '3d': 9, animations: 9, offline: 7 },
            basemap: { default: 8, themed: 9, custom: 10 }
        }
    }
};

// ===================================
// App State
// ===================================
let currentQuestion = 0;
let answers = {};

// ===================================
// Screen Navigation
// ===================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    answers = {};
    showScreen('quiz-screen');
    renderQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    showScreen('welcome-screen');
}

// ===================================
// Quiz Logic
// ===================================
function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    const isMulti = question.type === 'multi';
    
    const optionsHtml = question.options.map(option => {
        const isSelected = isMulti 
            ? (answers[question.id] || []).includes(option.value)
            : answers[question.id] === option.value;
        
        return `
            <div class="option-card ${isSelected ? 'selected' : ''}" data-multi="${isMulti}" data-value="${option.value}" onclick="selectOption('${question.id}', '${option.value}', ${isMulti})">
                <span class="option-indicator"></span>
                <div class="option-content">
                    <div class="option-title">${option.title}</div>
                    <div class="option-description">${option.description}</div>
                </div>
                <span class="option-icon">${option.icon}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="question-header">
            <span class="question-number">Question ${currentQuestion + 1}</span>
            <h2 class="question-title">${question.title}</h2>
            <p class="question-description">${question.description}</p>
        </div>
        <div class="options-grid">
            ${optionsHtml}
        </div>
    `;

    updateProgress();
    updateNavigation();
}

function selectOption(questionId, value, isMulti) {
    if (isMulti) {
        if (!answers[questionId]) {
            answers[questionId] = [];
        }
        const index = answers[questionId].indexOf(value);
        if (index > -1) {
            answers[questionId].splice(index, 1);
        } else {
            answers[questionId].push(value);
        }
    } else {
        answers[questionId] = value;
    }
    
    // Update visual selection
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => {
        const cardValue = card.dataset.value;
        const isSelected = isMulti 
            ? (answers[questionId] || []).includes(cardValue)
            : answers[questionId] === cardValue;
        card.classList.toggle('selected', isSelected);
    });
    
    updateNavigation();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateNavigation() {
    const question = questions[currentQuestion];
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    // Check if current question has an answer
    const hasAnswer = question.type === 'multi' 
        ? (answers[question.id] || []).length > 0
        : answers[question.id] !== undefined;
    
    nextBtn.disabled = !hasAnswer;
    
    // Update button text for last question
    if (currentQuestion === questions.length - 1) {
        nextBtn.innerHTML = `
            <span>See Results</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
    } else {
        nextBtn.innerHTML = `
            <span>Continue</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// ===================================
// Results Calculation
// ===================================
function calculateScores() {
    const scores = {};
    
    for (const [libId, lib] of Object.entries(libraries)) {
        let totalScore = 0;
        let maxPossible = 0;
        
        for (const [questionId, answer] of Object.entries(answers)) {
            const questionScores = lib.scores[questionId];
            if (!questionScores) continue;
            
            if (Array.isArray(answer)) {
                // Multi-select: average the scores of selected options
                if (answer.length > 0) {
                    const sum = answer.reduce((acc, val) => acc + (questionScores[val] || 0), 0);
                    totalScore += sum / answer.length;
                    maxPossible += 10;
                }
            } else {
                totalScore += questionScores[answer] || 0;
                maxPossible += 10;
            }
        }
        
        scores[libId] = {
            score: totalScore,
            percentage: maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0
        };
    }
    
    // Sort by score
    return Object.entries(scores)
        .sort((a, b) => b[1].score - a[1].score)
        .map(([id, data]) => ({ id, ...data, ...libraries[id] }));
}

function generateReasons(lib) {
    const reasons = [];
    
    // Skill level match
    const skillLevel = answers.skill_level;
    if (lib.scores.skill_level[skillLevel] >= 8) {
        if (skillLevel === 'beginner') {
            reasons.push('Great for beginners with easy learning curve');
        } else if (skillLevel === 'intermediate') {
            reasons.push('Good balance of power and complexity');
        } else {
            reasons.push('Full control for advanced developers');
        }
    }
    
    // Data volume handling
    const dataVolume = answers.data_volume;
    if (lib.scores.data_volume[dataVolume] >= 8) {
        if (dataVolume === 'large') {
            reasons.push('Handles large datasets efficiently');
        } else if (dataVolume === 'medium') {
            reasons.push('Good performance with medium-sized data');
        }
    }
    
    // Feature highlights
    const features = answers.features || [];
    const featureMatches = features.filter(f => lib.scores.features[f] >= 8);
    if (featureMatches.length > 0) {
        const featureNames = {
            'markers': 'markers',
            'clustering': 'clustering',
            'heatmaps': 'heatmaps',
            'drawing': 'drawing tools',
            'routing': 'routing',
            '3d': '3D visualization',
            'animations': 'animations',
            'offline': 'offline support'
        };
        const matched = featureMatches.slice(0, 2).map(f => featureNames[f]).join(' and ');
        reasons.push(`Excellent support for ${matched}`);
    }
    
    // Basemap customization
    if (answers.basemap === 'custom' && lib.scores.basemap.custom >= 8) {
        reasons.push('Full map styling customization');
    }
    
    // Add from library's strengths if we need more reasons
    while (reasons.length < 3 && lib.strengths.length > reasons.length) {
        const strength = lib.strengths[reasons.length];
        if (!reasons.includes(strength)) {
            reasons.push(strength);
        }
    }
    
    return reasons.slice(0, 3);
}

function showResults() {
    const ranked = calculateScores();
    const container = document.getElementById('recommendations');
    
    const html = ranked.slice(0, 5).map((lib, index) => {
        const isTopPick = index === 0;
        const reasons = generateReasons(lib);
        const highlightTags = lib.tags.slice(0, 2);
        const regularTags = lib.tags.slice(2);
        
        return `
            <div class="recommendation-card ${isTopPick ? 'top-pick' : ''}">
                <div class="recommendation-rank">
                    <span class="rank-number">${index + 1}</span>
                    ${isTopPick ? '<span class="rank-label">Top Pick</span>' : ''}
                </div>
                <div class="recommendation-content">
                    <h3 class="recommendation-name">${lib.name}</h3>
                    <p class="recommendation-tagline">${lib.tagline}</p>
                    <div class="recommendation-tags">
                        ${highlightTags.map(tag => `<span class="tag highlight">${tag}</span>`).join('')}
                        ${regularTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <ul class="recommendation-reasons">
                        ${reasons.map(reason => `<li>${reason}</li>`).join('')}
                    </ul>
                </div>
                <div class="recommendation-links">
                    <a href="${lib.url}" target="_blank" rel="noopener" class="recommendation-link">
                        <span>Website</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                    <a href="${lib.docs}" target="_blank" rel="noopener" class="recommendation-link">
                        <span>Docs</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
    showScreen('results-screen');
}

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // App is ready
    console.log('Map Stack Finder initialized');
});
