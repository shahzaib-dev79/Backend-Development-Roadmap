const http = require("http");
http
  .createServer((req, res) => {
    if (req.url === "/block") {
      const end = Date.now() + 5000;
      while (Date.now() < end) {}
      console.log(end);
      return res.end("block end");
    }
    res.end("fast");
  })
  .listen(3000);
