const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl, err=>{
    if(err) throw err;
    console.log("Database has been connected!");
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("Backend is running on port: ",port);
});