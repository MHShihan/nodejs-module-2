const fs = require("fs");

fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("Error! regarding reading file");
  }
  console.log(data);
});

fs.writeFile(__dirname + "/write-async.txt", "Hello Nodejs", (err) => {
  if (err) {
    throw new Error("Error!");
  }
});
