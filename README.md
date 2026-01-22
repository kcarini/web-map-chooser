# Map Stack Finder 🗺️

An interactive web application that helps developers choose the right open source web mapping library for their project.

**[Try it live →](https://kcarini.github.io/web-map-chooser/)**

## About

Choosing a web mapping library can be overwhelming. Leaflet? OpenLayers? MapLibre? Each has its strengths, and the best choice depends on your specific needs.

Map Stack Finder asks you 5 simple questions about:
- Your **technical skill level**
- Your **data sources** (GeoJSON, CSV, APIs, etc.)
- Your **data volume** (hundreds vs. millions of features)
- **Features** you need (clustering, 3D, heatmaps, etc.)
- **Map styling** requirements

Then it recommends the best open source libraries for your use case, with personalized explanations for why each one fits.

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

- Vanilla HTML, CSS, and JavaScript
- No dependencies or build tools
- Responsive design (works on mobile)

## Contributing

Have suggestions for improving the recommendations or adding new libraries? Feel free to open an issue or PR!

## License

MIT
