# Getting Started with TypeScript

Simple examples to help you learn how to get started using TypeScript in your projects.

## Run the Project

1. Install Node.js LTS ([https://nodejs.org](https://nodejs.org))
1. Open a command window at the root of this project
1. Run `npm install`
1. Run `npm run tsc` to build the TypeScript code
1. Run `npm run http-server` to start the web server and run the app

**NOTE:**

If you want to play with the `.ts` file(s) in this project and automatically have any changes you make trigger
the TypeScript build process, run `npm run tsc:w` instead of `npm run tsc` which will setup a "watcher" to watch for any changes you make and automatically cause the TypeScript compiler to run when a file is changed.