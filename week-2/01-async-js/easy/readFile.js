const fs = require('fs');

fs.readFile("./a.txt", 'utf8', (err, data) => {
  if (err) {
    console.error('Error Reading the file :- ', err);
    return;
  }
  console.log(data);
})

console.log("Are You even Serious??");
