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

//pagination
app.get('/', function (req, res) {
   let {page,limit}=req.query;
   if(!page) page=1;
   if(!limit) page=10;

   const skip=(page-1)*10;
   const allproductslist = allproductslist.find().skip(skip).limit(limit);


	  res.send({page:page, limit: limit,allproductslist: allproductslist });
});
	 
app.listen(port,function(){
    console.log(`Server started on ${port}`)
});