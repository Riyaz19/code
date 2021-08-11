const mongoose=require('mongoose');
const validator = require('validator')
const Schema= new mongoose.Schema({
    name:{
        type:String
        // required:true 
    },
    Lastname:{ 
        type:String
        // required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
         type:Number       
    },
    password:{
        type:String
    }
})

//creating the model...
const User= new mongoose.model('User',Schema)
module.exports=User




