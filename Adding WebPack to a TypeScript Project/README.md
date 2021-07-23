# Adding WebPack into a TypeScript Project

This example shows how webpack can be use to compile TypeScript, generate bundles, and start a development web server.

## Running the Project using Webpack

1. Install Node.js LTS ([https://nodejs.org](https://nodejs.org))
1. Open a command window at the root of this project
1. Run `npm install`
1. Run `npm start` to start the web server and run the app

**NOTE:**

Running `npm start` compiles your TypeScript and loads the JavaScript bundle into memory (you won't see a `dist`created in this case). 
If you want to compile your TypeScript and create a bundle in the `dist` folder you can run `npm run webpack` or 
`npm run webpack:w` (if you want webpack to watch for changes to files). 

