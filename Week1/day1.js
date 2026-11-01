const fs = require("fs");
(function testing() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  setImmediate(() => {
    console.log(3);
  });
  Promise.resolve().then(() => console.log(4));
  process.nextTick(() => {
    console.log(5);
  });
  console.log(6);
})();

fs.readFile("textFile.txt", () => {
  setTimeout(() => console.log("Time Out"), 0);
  setImmediate(() => console.log("Immediate"));
});
