const mongoose=require('mongoose');

const loginSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true
    }
})
const Login=mongoose.model('login',loginSchema);

module.exports=Login;