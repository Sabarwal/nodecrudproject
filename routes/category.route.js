import express from "express";
import {addCategory,updateCategory,categoryList,deleteCategoryById} from '../controllers/category.controller'
const router=express.Router();
router.post('/addcategory',addCategory)
router.get('/categorylist',categoryList)
router.post('/updatecategory/:id',updateCategory)
router.post('/deletecategory/:id',deleteCategoryById)

export default router;