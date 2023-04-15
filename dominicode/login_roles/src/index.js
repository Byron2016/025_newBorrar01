const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`alisten on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("pagina inicio");
});

app.get("/test", (_req, res) => {
  return res.send("aaExpress Typescript on Vercel");
});

app.get("/ping", (_req, res) => {
  return res.send("pong.. -> 🏓");
});
