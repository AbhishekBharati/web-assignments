const fs = require('fs');

const data = "Learning asynchronous nature of javaScript";

fs.writeFile('./a.txt', data, 'utf8', (err) => {
  if (err) {
    console.error("Fall into an error while inserting in the file :-", err);
  } else {
    console.log("File inserted successfully check the file man...");
  }
})
