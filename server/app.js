const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({ strict: false }));

const port = 8080;
const dataRouter = require("./src/router/data");

app.use("/", dataRouter);

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports.app = app;
module.exports.server = server;
