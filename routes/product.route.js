import express from "express";
import {addProduct,updateProduct,getAllProduct,deleteProductById,findByPrice,searchOneProduct} from '../controllers/product.controller'
const router=express.Router();
router.post('/addproduct',addProduct)
router.get('/allproductslist',getAllProduct)
router.get('/products/:price',findByPrice)
router.post('/deleteproduct/:id',deleteProductById)
router.post('/updateproduct/:id',updateProduct)





searchOneProduct
export default router;