import Category from "../models/category.model"

import Product from "../models/product.model";

import mongoose from "mongoose";
export const addCategory = function (req, res) {
    const categoryData = {
        name: req.body.name
    }
    Category.create(categoryData, function (err, data) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Something went wrong",
            })
        }
        return res.status(200).json({
            status: true,
            data: data,
            message: "Category added successfully",
        })

    })
}

export const updateCategory = function (req, res) {
    // router.route("/update").put(function(req, res) {
    Category.updateOne({ _id: req.params.id }, { name: req.body.name }, function (
        err,
        result
    ) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

export const deleteCategoryById = function (req, res) {
    // router.route("/update").put(function(req, res) {
    Category.deleteOne({ _id: req.params.id }, function (err, data) {
        console.log("Category deleted")

    });
   

    Product.deleteMany({ categoryId: req.params.id }, function (err, data) {
        console.log("products deleted")
    });


    res.send("Done Successfuly")
};




export const categoryList = function (req, res) {

    Category.find(function (err, categories) {

        res.send(categories);
    });
};



