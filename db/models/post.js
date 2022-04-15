const mongoose=require('mongoose');
const slug=require('slugify');

const postSchema=new mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
    movieNameD:{
        type:String,
        required:true

    },
    keyword:{
        type:String,
        required:true

    },
    img:{
        type:String,
        required:true
        
    },
    series:{
        type:String,
        required:true

    },
    Lan:{
        type:String,
        required:true,
    },
    cat:{
        type:String,
        required:true

    },
    quality:{
        type:String,
        required:true

    },
    rDate:{
        type:String,
        required:true

    },
    downloadALink:{
        type:String,
        required:true

    },
    downloadBLink:{
        type:String,
        required:true

    },
    downloadCLink:{
        type:String,
        required:true

    },
    story:{
        type:String,
        required:true

    },
    des:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        default:Date.now,
    },
    link:{
        required:true,
        type:String,
        unique:true
    }
})
postSchema.pre('validate',function(){
    if(this.movieName){
        this.link=slug(this.movieName,{lower:true,
        strict:true})
    }
})
const Post=mongoose.model('post',postSchema);
module.exports=Post; 