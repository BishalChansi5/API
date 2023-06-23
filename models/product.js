const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
 name:{
    type: String,
    required: true,
 },
 price:{
    type:Number,
    required: [true,"Price must be provided"],
 },
 featured:{
    type: Boolean,
    default: false,
 },
 image:{
    type:String,
    required: true,
},
description:{
    type:String,
    required: true,
},
category:{
    type: String,
    enum:{
        values:["beverage","grocery","alcohol","Eggs and meat","vegetables and fruits"],
        message: `{VALUE} is not supported`,
    },
rating:{
    type:Number,
    default: 4.9,
},
createdAt:{
    type: Date,
    default: Date.now(),
},


}

});


module.exports = mongoose.model("Products",productSchema);