const express = require("express");
const cors = require('cors')

const app = express();

const port =process.env.PORT || 5000
app.use(express.json());
app.use(cors())

// connect with config 
const connect = require("./config/db");

const { register, login } = require('./controllers/user.controller')
const productController = require("./controllers/product.controller");

app.use('/signup', register)
app.use('/signin', login)
app.use("/products", productController);



app.listen(port, async function(req,res){
    try{
connect()
console.log("listening port 5000");

    }
    catch(err){
console.log(err.message);
    }
})