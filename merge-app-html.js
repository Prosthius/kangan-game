const fs = require('fs');
const jsdom = require('jsdom');
const pretty = require('pretty');
const { JSDOM } = jsdom;

// Read the HTML files
const app = fs.readFileSync('./game-wrapper/src/app.html', 'utf8');
const index = fs.readFileSync('./gdevelop/export/index.html', 'utf8');

// Parse the HTML files
const indexDom = new JSDOM(index);
const appDom = new JSDOM(app);

// Get the script tags from the head of the second file
const indexHead = appDom.window.document.getElementsByTagName('head')[0];
const indexScriptTags = indexHead.getElementsByTagName('script');

// Get the head element from the first file
let head = indexDom.window.document.getElementsByTagName('head')[0];

// Remove all script tags from the head of the first file
let appScriptTags = head.getElementsByTagName('script');
while (appScriptTags.length > 0) {
  appScriptTags[0].parentNode.removeChild(appScriptTags[0]);
}

// Add the script tags from the second file to the head of the first file
for (let i = 0; i < indexScriptTags.length; i++) {
  let importedScript = indexDom.window.document.importNode(indexScriptTags[i], true);
  head.appendChild(importedScript);
}

// Write the modified HTML back to the first file
let html = indexDom.serialize();
let prettyHtml = pretty(html);
// fs.writeFileSync('./game-wrapper/src/app.html', prettyHtml);
fs.writeFileSync('./app.html', prettyHtml);
