const mongoose = require("mongoose");
const schema = mongoose.Schema;
const product_model = new schema({
    name : { type : String,required : true,max :100},
    producttype: {type:String}
});
module.exports = mongoose.model("Product1",product_model);