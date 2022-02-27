const path = require('path');

//console.log(path.sep)

//join path
// const filePath=path.join(`/content`,`subfolder`,`test.txt`);

//show base path name
// const base=path.basename(filePath);
// console.log(base);

//absolute path
const absolutes = path.resolve(__dirname, `/content`, `subfolder`, `test.txt`);
console.log(absolutes);
