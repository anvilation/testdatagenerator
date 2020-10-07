const fs = require('fs');


const path = './PerformanceTests'
const simpledoc = './SimpleDocument.docx'

// Create Base Folder
if (!fs.existsSync(path)) {
    console.log(`Create Folder: ${path}`)
    fs.mkdirSync(path);
}


// Create 50 Folder
const fiftyFolder = `${path}/50Folder`;
if (!fs.existsSync(fiftyFolder)) {
    console.log(`Create Folder: ${fiftyFolder}`)
    fs.mkdirSync(fiftyFolder);
}

// create Folders
for (let f = 1; f < 51; f++) {
    const folder = `${fiftyFolder}/${f}`;
    if (!fs.existsSync(folder)) {
        console.log(`Create Folder: ${folder}`)
        fs.mkdirSync(folder);
    }

}

// Create 100 Items Folder

// Create 50 Folder
const oneHundredItems = `${path}/100Items`;
if (!fs.existsSync(oneHundredItems)) {
    console.log(`Create Folder: ${oneHundredItems}`)
    fs.mkdirSync(oneHundredItems);

}

// Create 100 Documents
for (let file = 0; file < 100; file++) {
    const filename = `SimpleDocument_${file}.docx`;
    fs.copyFileSync(simpledoc, `${oneHundredItems}/${filename}`);
    console.log(`Coping file from ${simpledoc} to ${oneHundredItems}/${filename}`)
}

