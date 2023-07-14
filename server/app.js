const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

require("./db/conn");
const User = require("./models/Schema");

app.use(express.json());
app.use(require("./Router/Auth"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is runnig at port no http://localhost:${PORT}`);
});
