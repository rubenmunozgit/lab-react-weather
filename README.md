# Yes! another Weather react app
You will find another weather react app build with `create-react-app` script.

I try to walk throught on all features that this wheather app has.
Please check the real thing: https://rubenmunozgit.github.io/lab-react-weather/

- First the weather api is from: www.openweathermap.com
- It will give you information regarding the current conditions and a forecast by days.
- It gets the weather information based on the Browser Navigation.
- I tried to build all css, no bootstraping or similar (please don't judge ;).

## Weather API
Ok, so I use openweathermap with the a free account; by the time of writing this app there is only available fre api information for the `Current Weather Data` and the `Hourly Forecast 4 days`.

I had to do some tricks and calculations to get the forecast by day before represent in the UI.

The weather is calculated based on the geolocation provided by the Browser, so once I got the `lat` and `long` there will be to api calls:
- Current Conditions: `api.openweathermap.org/data/2.5/weather?`
- Forecast Data: `openweathermap.org/data/2.5/forecast?` 

## Some CSS

## Internationalitation