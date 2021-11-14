var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://<username>:<password>@cluster0-owf5m.mongodb.net/cmscart?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
//ÜSTTEKİ LİNKİ KENDİMİZİNKİNE GÖRE YAZICAZ

// Page schema 
const FavoriuteSchema=new Schema({
    Favoriute_Set_ID:{//primary key
        type:Number,
        required:true,
        trim: true
    },
    Favoriute_products:{
        type:Array,
        required:true,
        trim: true
    },
    Total_price:{
        type:Number,
        trim: true,
        required:true
    },
    username:{//this can also be a primary key or foreign key I am not sure I think foreign key
        type:String,
        trim:true
    }
});
module.exports = FavoriuteSchema;