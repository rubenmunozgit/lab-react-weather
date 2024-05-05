# Yes! another Weather react app

You will find another weather react app build with `create-react-app` script.

I try to walk throught on all features that this wheather app has.
Please check the real thing: https://rubenmunozgit.github.io/lab-react-weather/

- First the weather api is from: www.openweathermap.com
- It will give you information regarding the current conditions and a forecast by days.
- It gets the weather information based on the Browser Navigation.
- I tried to build all css by myself, I did not use any framework like bootstrap or similar (please don't judge ;).

## Weather API

Ok, so I use openweathermap with the a free account; by the time of writing this app there is available a free api information for the `Current Weather Data` and the `5 day weather forecast`.

I had to do some tricks and calculations to get the forecast by day before represent in the UI.

The weather is calculated based on the geolocation provided by the Browser, so once I got the `lat` and `long` there will be two api calls:

- Current Conditions: `api.openweathermap.org/data/2.5/weather?`
- Forecast Data: `api.openweathermap.org/data/2.5/forecast?`
  this 5 day forecast api gives you the temperature every 3 hours.

## Some CSS

Because I don't use any bootstrap or similar, the UI is quite simple, most of it is done with `Grid` and `Flexbox`.
I followed the principle of mobile first.

### Forecast CSS bars

Its show the minimun and maximun temperature by date (remember temperature points every 3hr).
The minimun is on the left side and the maximun is on the right, the maximun will move depending on the max temperature of any given day (inside the 5 day windows provide by the api).

The maximun temperature by day will also change the background color of the bar based on the temperature range, using a `linear-gradient`.
Using this colors based on the temperature:

```
const bgColors = {
  burning: "rgba(245, 120, 66, 1)",
  verywarm: "rgba(245, 182, 66, 1)",
  warm: "rgba(236, 245, 66, 1)",
  normal: "rgba(66, 245, 72, 1)",
  cold: "rgba(66, 245, 221, 1)",
  verycold: "rgba(66, 239, 245, 1)",
};
```

## Internationalitation

The web app use the Browser language set by default to check the language and use the translated text to show in the web app.
[how to set default language in chrome](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=en).

If the Browser is not able to get the default language, then English will be the default language.

Right now only support these languages:

- English :us:
- Spanish :es:

If you would like to contribute, you are welcome! :wink:
