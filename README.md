Social Media application with search, filteration, login, presistance, redux

uses React, monogoBD, HTML, CSS, Javascript, Axios, and other technolgies





NOTES

export PATH=/usr/bin:/bin       path get thrown out

"scripts": { "start": "WATCHPACK_POLLING=true react-scripts start"}    auto reload 
or
"scripts": { "start": "CHOKIDAR_USEPOLLING=true react-scripts start"}

will use alot of Material-ui inclusing core

if hosted would place proxy in json followined by url of the project

due to cores ploce, you will need a proxy, make it the same as the one for the backend, aso in the backend speciefy cores before the routs



INSTALL
npm i -D react-router-dom@latest
npm init -y            create package json
npm i body-parser      to send request
      cors             enable cross orgin request
      express          create the routing
      mongoose         create database NoSql
      Nodemon          auto update the server
following produving style and syntax best practices support nothing critical
      --save-dev eslint-plugin-react-hooks
      --save-dev eslint-plugin-react
      --save-dev eslint-plugin-jsx-a11y
      --save-dev eslint-plugin-import      
      --save-dev eslint-config-airbnb
      --save-dev @redux-devtools/log-monitor
      --save-dev @redux-devtools/dock-monitor
      --save-dev @redux-devtools/core
      bunch of material ui stuff
      end
npm i   redux-thunk         async logic interacts with store
        react-redux         similar to rrdom regardring manging state
        react-file-base64   converting files to base64 string
        moment              format and style dates
        jwt-decode          decoding json web token
        axios               promise-based HTTP client for the browser and node






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
