const fs = require("fs");

// fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw new Error("Error! regarding reading file");
//   }

//   fs.writeFile(__dirname + "/write-async.txt", data, (err) => {
//     if (err) {
//       throw new Error("Error!");
//     }
//   });
// });

// creating a readable stream
const readStream = fs.createReadStream(__dirname + "/hello.txt", "utf-8");
readStream.on("data", (data) => {
  console.log(data);

  //   creating a writable stream
  const writeableStream = fs.createWriteStream(__dirname + "/hello-write.txt");

  //   writeableStream.write(data, (err) => {
  //     if (err) {
  //       throw new Error("Error!");
  //     }
  //   });

  readStream.pipe(writeableStream);
});
