const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'js', 'projects-data.js');

// Update projects-data.js
let pd = fs.readFileSync(dataFile, 'utf8');

// Replace the string arrays in files
pd = pd.replace(/files:\s*\["📁 docs\/",\s*"📄 readme.md",\s*"📄 config.txt"\],/g, 'files: [\n            { name: "📁 docs/", url: "#" },\n            { name: "📄 readme.md", url: "#" },\n            { name: "📄 config.txt", url: "#" }\n        ],');

fs.writeFileSync(dataFile, pd);
console.log('Update complete');
