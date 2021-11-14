var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://<username>:<password>@cluster0-owf5m.mongodb.net/cmscart?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
//ÜSTTEKİ LİNKİ KENDİMİZİNKİNE GÖRE YAZICAZ

// Page schema 
const CartSchema=new Schema({
    Products:{
        type:Array,
        required:true,
        trim: true
    },
    Total_price:{
        type:Number,
        trim: true,
        required:true
    },
    username:{
        type:String,
        trim:true
    }
});
module.exports = CartSchema;