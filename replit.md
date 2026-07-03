# Lab React Weather

A React weather app (Create React App) that shows current conditions and a 5-day forecast using the OpenWeatherMap API and browser geolocation.

## Stack

- React 18 (Create React App)
- OpenWeatherMap API (`/data/2.5/weather` and `/data/2.5/forecast`)
- Browser Geolocation API
- CSS Grid / Flexbox (no UI framework)
- i18n: English and Spanish (auto-detected from browser language)

## Running the app

```bash
npm start
```

The workflow `Start application` runs `npm start` on port 5000.

## Environment variables / secrets

| Key | Description |
|-----|-------------|
| `REACT_APP_APIKEY` | OpenWeatherMap API key (Replit Secret) |
| `PORT` | Set to `5000` for Replit webview |
| `BROWSER` | Set to `none` to prevent auto-opening a browser tab |

## Notes

- The app requests browser geolocation on load. You must allow location access in the preview for weather data to appear.
- The forecast endpoint returns data every 3 hours; the app aggregates this into daily min/max values.
- `homepage` in `package.json` is set to the GitHub Pages URL — ignore this for local/Replit use.

## User preferences

- Keep the project's existing structure and stack.
