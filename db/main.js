const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://naveensainibillon:<password>i@cluster0.6bxko.mongodb.net/Nmovies?retryWrites=true&w=majority")
.then(()=>
{
    console.log('database connected');
})
.catch((e)=>{
    console.log(e);
});