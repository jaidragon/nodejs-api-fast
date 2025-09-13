const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = process.env.LOCAL_MONGODB;
mongoose
    .connect(mongoURI)
    .then (() => console.log("mongoose conntect"))
    .catch((err) => console.log(err));

app.listen(5000, () => console.log("server running on port 5000"));
