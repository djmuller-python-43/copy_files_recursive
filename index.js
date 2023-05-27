const recursive = require("recursive-readdir");
const fs = require('fs-extra')
const path = require('path')

recursive("./PICS", function (err, files) {
  // `files` is an array of file paths
  const filteredFiles = files.filter((file) => file.includes('.PES'))
  
  for (const fn of filteredFiles) {
    
    fs.copyFileSync( fn , path.join('./PES', '/', path.basename(fn)) ); 
  }
});