const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (req.url === "/auth" || req.url === "/auth/") {
    proxy.web(req, res, { target: "http://localhost:3000" });
  } else if (
    req.url === "/auth/register" ||
    req.url.startsWith("/auth/register/")
  ) {
    proxy.web(req, res, { target: "http://localhost:3000" });
  } else if (req.url.startsWith("/blogs/create")) {
    proxy.web(req, res, { target: "http://localhost:4000" });
  }else if (
    req.url === "/blogs" ||
    req.url.startsWith("/blogs")
  ){
    proxy.web(req,res , {target : "http://localhost:4000"})
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found at all");
  }
});

server.listen(8000, () => {
  console.log("Reverse proxy server is running on port 8000");
});
