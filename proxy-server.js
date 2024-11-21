require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  createProxyMiddleware({
    target: "http://apidemo.luceed.hr",
    changeOrigin: true,
    pathRewrite: (path) => {
      console.log(`Original path: ${path}`);
      let rewrittenPath = `/datasnap/rest${path}`;
      rewrittenPath = rewrittenPath.replace("/api", "");
      console.log(`Rewritten path: ${rewrittenPath}`);
      return rewrittenPath;
    },
    auth: `${process.env.TS_USERNAME}:${process.env.TS_PASSWORD}`,
  })
);

console.log(process.env.TS_USERNAME);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Proxy server: http://localhost:${PORT}`);
});
