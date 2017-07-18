/** let count = 0; setInterval(()=>{ count++ % 2 ? console.log("what is that ?") : console.log("How to ？");  }, 100); */
let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');

let ports = require('../config/ports');
let port = ports.serverPort;

let curServerDir = path.resolve('./mock');
let read = (cb) => {
  hotBookPath = path.resolve(curServerDir, 'book.json');
  fs.readFile(hotBookPath, 'utf-8', (err, data) => {
    if (err || data.length === 0) {
      cb([])
    } else {
      cb(JSON.parse(data));
    }
  });
};
// function read(cb) {
//   // console.log(require('path').resolve('./mock/book.json'));
//   return cb(JSON.parse(content));
// }

http.createServer(function (req, res) {
  // console.log("server.js", 26, curServerDir + '/sliders');
  let slidersPath = path.resolve(curServerDir, 'sliders.js');
  console.log(slidersPath);
  let sliders = require(slidersPath);
  console.log(31, sliders);
  let {pathname, query} = url.parse(req.url, true);
  console.log(pathname);
  if (pathname === '/api/sliders') {
    console.log(34, sliders);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    console.log(sliders);
    console.log(38, JSON.stringify(sliders));
    res.end(JSON.stringify(sliders));
  } else if (pathname === '/api/hot') {
    read(function (data) {
      setTimeout(function () {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(data.reverse().slice(0, 9)));
      }, 2000)
    });
  } else if (pathname === '/api/book') {
    switch (req.method) {
      case 'GET':
        read(function (data) {
          setTimeout(() => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(data));
          },600)
        });
    }
  }
}).listen(port, () => console.log(port + " ok"));

