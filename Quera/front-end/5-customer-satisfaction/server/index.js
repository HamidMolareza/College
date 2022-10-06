var http = require("http");
var url = require("url");
var { parse } = require("querystring");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname !== "/vote") {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else {
      if (req.method === "POST") {
        collectRequestData(req, (result) => {
          console.log(result);
          if (!!!result.name || !!!result.email || !!!result.score) {
            res.writeHead(400, { "Content-Type": "text/html" });
            res.end("400 Bad Request");
          } else {
            res.end(`<!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
              </head>
              <body dir="rtl">
                <p>نام: ${result.name}</p>
                <p>ایمیل: ${result.email}</p>
                <p>سرویس‌ها: ${
                  !!result.services ? result.services : "بدون جواب"
                }</p>
                <p>رضایت: ${
                  !!result.satisfaction
                    ? result.satisfaction === "yes"
                      ? "بله"
                      : "خیر"
                    : "بدون جواب"
                }</p>
                <p>شعبه: ${!!result.branch ? `شعبه ${result.branch}` : "بدون جواب"}</p>
                <p>امتیاز: ${result.score}</p>
              </body>
            </html>`);
          }
        });
      } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("400 Bad Request");
      }
    }
  })
  .listen(8080);

function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}
