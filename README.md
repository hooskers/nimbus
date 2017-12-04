# nimbus
Simple grayscale React weather app powered by the Dark Sky API.

Work in Progress
Uses:
- [React](https://github.com/facebook/react)
- [Emotion](https://github.com/emotion-js/emotion)
- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [Yarn](https://github.com/yarnpkg/yarn)
- [Dark Sky API](https://darksky.net/dev)

Something to do for fun in my little free time.
Currently it only tells the current conditions, but will eventually provide daily, hourly, and minutely forecasts.
NOTE: Not all weather animations have been created yet. You can use the animation selector in the bottom left to see all of the animations. If an animation does not exist yet, a mess will be displayed.

## Run it
Simplest way, for the moment, is to download this repo and open `dist/index.html`.

## Dev it
`yarn start`
Starts a Webpack dev server with hot module loading.

## Build it
`yarn build`
Webpack will create a bundle and place it, along with the rest of the files, in the `dist` directory.

