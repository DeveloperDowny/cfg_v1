const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./db/conn');
const User = require('./models/Schema');

app.use(express.json());
app.use(require('./Router/Auth'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})

