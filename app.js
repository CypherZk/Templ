const fs = require('fs');

const folderName = process.argv[2] || 'Project';
const css = `${folderName}/asset/css/`;
const jsPath = `${folderName}/asset/js/`;
const img = `${folderName}/asset/img/`;
const pages = `${folderName}/pages/`;

const boilerplateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
    <link rel="stylesheet" href="${css}/app.css">
</head>
<body>
    <h1>Hello World!</h1>

    <script src="${jsPath}main.js"></script>
</body>
</html>
`;

const boilerplateCSS = `
*,*::before,*::after {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}

html {
    scroll-behavior: smooth;
}
`;
const boilerplateJS = `
    alert('${folderName} says Hello!');
`

const createTemplate = async function(folderName){
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, boilerplateHTML);
    fs.mkdirSync(`${folderName}/asset`);
    fs.mkdirSync(`${pages}`);
    fs.mkdirSync(`${img}`);
    fs.mkdirSync(`${css}`);
    fs.writeFileSync(`./${css}app.css`, boilerplateCSS);
    fs.mkdirSync(`${jsPath}`);
    fs.writeFileSync(`./${jsPath}main.js`, boilerplateJS);
}

createTemplate(folderName);