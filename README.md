# Awesome Text Editor

![License](https://img.shields.io/badge/Licence-MIT-blue)

## Table of Contents
- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Built With](#installation)
- [Installation](#installation)
- [Demo](#demo)
- [Important Links](#important-links)
- [License](#license)

## Description
This project is basically PWA which runs in the browser.

## Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
------------------------------------------------------------------------------

## Built With

* [express](https://expressjs.com/)
* [concurrently](https://www.npmjs.com/package/concurrently)
* [webpack](https://webpack.js.org/)
* [idb](https://www.npmjs.com/package/idb)
* [babel-loader](https://www.npmjs.com/package/babel-loader)

------------------------------------------------------------------------------

## Installation
1. Clone the repo
   ```
   git clone https://github.com/bajraroshan/awesome-text-editor.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Start Server
   ```
   npm run start
   ```

------------------------------------------------------------------------------

## DEMO

![Demo 1](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-01.gif)
![Demo 2](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-02.gif)
![Demo 3](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-03.gif)
![Demo 4](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-04.gif)

## Important Links
Deployed Link: https://youtu.be/bkNI_kvtgXs/<br/>
Github Repositories: https://github.com/bajraroshan/social-network-api

## License
Copyright (c) [2021] [Roshan Bajracharya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
