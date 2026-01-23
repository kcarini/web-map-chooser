# Map Stack Finder 🗺️

An interactive web application that helps developers choose the right open source web mapping library for their project, enhanced with AI-powered insights.

**[Try it live →](https://map-stack-finder.vercel.app)**

## About

Choosing a web mapping library can be overwhelming. Leaflet? OpenLayers? MapLibre? Each has its strengths, and the best choice depends on your specific needs.

Map Stack Finder asks you 5 simple questions about:
- Your **technical skill level**
- Your **data sources** (GeoJSON, CSV, APIs, etc.)
- Your **data volume** (hundreds vs. millions of features)
- **Features** you need (clustering, 3D, heatmaps, etc.)
- **Map styling** requirements

Then it recommends the best open source libraries for your use case, with personalized explanations for why each one fits.

### AI-Enhanced Recommendations

After the scoring algorithm ranks your options, **Google Gemini AI** provides additional personalized insights — explaining why the top pick is best for your specific situation and offering practical tips for getting started.

## Libraries Evaluated

| Library | Best For |
|---------|----------|
| **[Leaflet](https://leafletjs.com)** | Beginners, simple maps, lightweight projects |
| **[OpenLayers](https://openlayers.org)** | GIS professionals, OGC standards, complex data |
| **[MapLibre GL JS](https://maplibre.org)** | Vector tiles, custom styling, Mapbox alternative |
| **[deck.gl](https://deck.gl)** | Big data visualization, millions of points |
| **[Kepler.gl](https://kepler.gl)** | No-code data visualization, quick exploration |
| **[CesiumJS](https://cesium.com/cesiumjs/)** | 3D globes, terrain, time-series data |

## Usage

Simply open `index.html` in a web browser. No build step or server required.

```bash
# Clone the repo
git clone https://github.com/kcarini/web-map-chooser.git

# Open in browser
open web-map-chooser/index.html
```

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Backend**: Vercel Serverless Functions
- **AI**: Google Gemini API for enhanced recommendations
- Responsive design (works on mobile)

## Deployment

The app is deployed on Vercel with a serverless API endpoint for AI recommendations.

To deploy your own instance:

1. Fork this repository
2. Connect to Vercel: `vercel`
3. Add your Gemini API key: `vercel env add GEMINI_API_KEY production`
4. Deploy: `vercel --prod`

Get a Gemini API key at: https://aistudio.google.com/apikey

## Contributing

Have suggestions for improving the recommendations or adding new libraries? Feel free to open an issue or PR!

## License

MIT
