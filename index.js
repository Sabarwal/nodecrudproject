const express = require('express')
const app = express() // initialize express
import mongoose from 'mongoose';
import category from './routes/category.route';
import product from './routes/product.route';

const port=9001;
app.use(express.json())
app.use(category);
app.use(product);








mongoose.connect('mongodb://localhost:27017/crudproject')
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Connection fail")
})
	 
app.get('/', function (req, res) {
	  res.send('Hello World123')
})
	 
app.listen(port,function(){
    console.log(`Server started on ${port}`)
})