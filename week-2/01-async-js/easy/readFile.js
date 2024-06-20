const fs = require('fs');

fs.promises.readFile("./a.txt", 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

console.log("Are You even Serious??");
