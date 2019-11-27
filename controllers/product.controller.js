const Product1 = require("../models/product.model");
exports.test = (req,res)=>{
res.send("test controller called");
}
exports.product_create = function(req,res){
    let product = new Product1({
        name : req.body.name,
        producttype : req.body.producttype
    });
    product.save(product,(err)=>{
        if(err){
            return next(err);
        }
        res.send("product created succcessfully");
    });
}
exports.getall = function(req,res){
    Product1.find({},(err,products)=>{
        if(err){
            return next(err);
        }
        res.send(products);
    })
}
exports.product_details = function(req,res){
    Product1.findById(req.params.id,(err,product)=>{
        if(err){
            return next(err);
        }
        res.send(product);
    })
}

exports.product_update = function(req,res){
    Product1.findByIdAndUpdate(req.params.id,{ $set : req.body  },
        function(error,result){
            if(error){
                return next(error);
            }
            res.send("product updated.");
        })
}
exports.delete_product=function(req,res){
    Product1.findOneAndDelete(req.params.id,(err,pro)=>{
        if(err){
            return next(err);
        }
        res.send("product deleted");
    });
}