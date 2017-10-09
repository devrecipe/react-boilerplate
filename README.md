# React Boilerplate

At Devrecipe, we've setup a React boilerplate.

It uses React 16, React Router v4, React Hot Reload v3 and Redux, we use Webpack v3 and Webpack Dev Server, ESLint and it has Sass/CSS loader as well.

# Getting started

1. Clone the app to your development environment:

    ```sh
    cd /apps
    git clone https://github.com/devrecipe/react-boilerplate.git [app-name]
    cd [app-name]
    npm install
    npm start
    ```

3. The development server should open automatically [http://localhost:8080/](http://localhost:8080/) and there you can see the todo demo app. Congratulations!

4. For more productivity you can install Chrome's [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

# Change the 8080 port

If you don't want to use localhost on port 8080, you can change it in `webpack.config.js`.

# Scripts

Besides the `start` script, there is also the build script, more are coming soon

|`npm run <script>`|What it does|
|------------------|------------|
|`start`|Starts the app at [http://localhost:8080/](http://localhost:8080/). The bundle js/css files are stored in memory|
|`build`|Builds the minified js/css bundle and their source maps files in the `public` folder|

# License

&copy; 2017, MIT License