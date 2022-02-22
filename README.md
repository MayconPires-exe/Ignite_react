# Ignite_reactJS <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>

## Starting Project using yarn or npm
<img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"/>
<img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

  ```bash
    yarn init -y
      or
    npm install -y
  ```
## Install React end react-dom
  * react:
  ```bash
    yarn add react
      or
    npm install react
  ```
  * react-dom:
  ```bash
    yarn add react-dom
      or
    npm install react-dom
  ```
  * addendum: **react-dom** it's using for the web application and **react_native** using for mobile application.

  ## All application ReactJS, we'll use Babel in our code
  <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"/>

  * So we'll use next command with dependency of development **"-D"**:

  ```bash
    yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
      or
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
  ```
  * After this, we will go create one file **babel.config.js**
    * inside then, will have following configuration:

    ```js
      module.exports = {
        presets: [
          '@babel/preset-env'
        ]
      }
    ```
  * Using too before create **src/index.js** 
  ```bash
    yarn babel src/index.js --out-file dist/bundle.js
  ```