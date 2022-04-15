const mongoose =require('mongoose');

const contSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    textarea:{
        type:String,
        required:true,
    }
})

const Contact=mongoose.model('contact',contSchema);
module.exports=Contact;