require("dotenv").config()
const express = require ('express');
const dataBase = require('./config/dataBase')
const userRoutes = require('./routes/userRoutes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

dataBase();
app.use('/', userRoutes)

module.exports = app;