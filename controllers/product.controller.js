
import Product from "../models/product.model";
export const addProduct = function (req, res) {
    const productData = {
        name: req.body.name,
        
        price: req.body.price,
       
        categoryId: req.body.categoryId,
       
        countInStock: parseInt(req.body.countInStock)
    }

    Product.create(productData, function (err, data) {
        if (err) {
            console.log(data)
            return res.status(500).json({
                status: false,
                message: "Something went wrong",
            })
        }
        return res.status(200).json({
            status: true,
            data: data,
            message: "Product added successfully",
        })

    })
}

export const updateProduct = function (req, res) {
    Product.updateOne({ _id: req.params.id }, { name: req.body.name, description: req.body.description, price: req.body.price, Category: req.body.Category, SubCategory: req.body.SubCategory, countInStock: req.body.countInStock }, function (
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

export const getAllProduct = function (req, res) {
    Product.find(function (err, products) {

        res.send(products);
    });
};



export const deleteProductById = function (req, res) {
    Product.deleteOne({ _id: req.params.id }, function (
        err,
        result
    ) {
        if (err) {
            res.send(err);
        } else {
            res.json("Product deleted one");
        }
    });
};




export const findByPrice = function (req, res) {

    Product.find({ price: { $lte: req.params.price } },
        function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("records: ", data);
                res.json(data);
            }
        });
};



