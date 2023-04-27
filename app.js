const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path =require('path');
const bodyparser = require('body-parser');

const connectDB = require('./server/database/conn');

const app = express();

dotenv.config({path:'.env'});
const PORT = process.env.PORT || 5000;

// Log Requests
app.use(morgan('tiny'));

// MongoDB Connection
connectDB(); 

// Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// Set View Engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"assets/css"));

// Load Assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))

// Load Routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})