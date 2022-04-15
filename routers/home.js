const express=require('express');
const router=express.Router();
const Contact =require('../db/models/contact');
const Post=require('../db/models/post');



router.get('/contact',async(req,res)=>{
    const user1=await Post.find().skip(1).limit(30)
    res.render('contact',{data1:user1});
})
router.post('/contact',async(req,res)=>{
    try{
        const mess=await new Contact(req.body)
        mess.save();
        res.redirect('/');
    }
    catch(e){
        res.send("something wrong");
    }

})

router.get('/',async(req,res)=>{

    const user1=await Post.find().skip(1).limit(30)
    const user=await Post.find().sort({date:-1}).limit(25);
    const user2=await Post.find()
    // user.reverse();
    res.render('home',{data:user,data1:user1,data2:user2});
})

router.get('/home/:link',async(req,res)=>{
    try{
       const user=await Post.findOne({link:req.params.link});
       const user1=await Post.find().skip(2).limit(30);
      
       if(!user) return res.redirect('/')
    res.render('download',{data:user,data1:user1}); 
    }
    catch(e){
        res.send('something wrong')
    } 

})

router.get('/dmca',async(req,res)=>{
    const user1=await Post.find().skip(2).limit(30);
    res.render('dmca',{data1:user1})
})

router.get('/desclamer',async(req,res)=>{
    const user1=await Post.find().skip(1).limit(30)
    res.render('desclamer',{data1:user1});
})


router.get('/hollywood',async(req,res)=>{
    const user1=await Post.find().skip(1).limit(30)
    const user=await Post.find({cat:'hollywood'}).sort({date:-1}).limit(25);
    const user2=await Post.find({cat:'hollywood'})
    res.render('hollywood',{data:user,data1:user1,data2:user2})
})

router.get('/hollywood/:link',async(req,res)=>{
        try{
       const user=await Post.findOne({link:req.params.link});
       const user1=await Post.find().skip(1).limit(30)
       if(!user) return res.redirect('/')
    res.render('download',{data:user,data1:user1}); 
    }
    catch(e){
        res.send('something wrong')
    }    
})

router.get('/south',async(req,res)=>{
    const user=await Post.find({cat:'south'}).sort({date:-1}).limit(25);
    const user2=await Post.find({cat:"south"});
    const user1=await Post.find().skip(1).limit(30)
    res.render('south',{data:user,data1:user1,data2:user2});
})


router.get('/south/:link',async(req,res)=>{
    try{
   const user=await Post.findOne({link:req.params.link});
   const user1=await Post.find().skip(1).limit(30)
   if(!user) return res.redirect('/')
res.render('download',{data:user,data1:user1}); 
}
catch(e){
    res.send('something wrong')
}    
})



router.get('/punjabi',async(req,res)=>{
    const user=await Post.find({cat:'punjabi'}).sort({date:-1}).limit(25);
    const user2=await Post.find({cat:'punjabi'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('punjabi',{data:user,data1:user1,data2:user2})
})

router.get('/punjabi/:link',async(req,res)=>{
    try{
   const user=await Post.findOne({link:req.params.link});
   const user1=await Post.find().skip(1).limit(30)
   if(!user) return res.redirect('/')
res.render('download',{data:user,data1:user1}); 
}
catch(e){
    res.send('something wrong')
}    
})


router.get('/web',async(req,res)=>{
    const user=await Post.find({cat:'Web'}).sort({date:-1}).limit(25);
    const user2=await Post.find({cat:'Web'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('web',{data:user,data1:user1,data2:user2});
})


router.get('/web/:link',async(req,res)=>{
    try{
   const user=await Post.findOne({link:req.params.link});
   const user1=await Post.find().skip(1).limit(30)
   if(!user) return res.redirect('/')
res.render('download',{data:user,data1:user1}); 
}
catch(e){
    res.send('something wrong')
}    
})

router.get('/bollywood',async(req,res)=>{
    const user=await Post.find({cat:'bollywood'}).sort({date:-1}).limit(25);
    const user2=await Post.find({cat:'bollywood'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('bollywood',{data:user,data1:user1,data2:user2})
})

router.get('/bollywood/:link',async(req,res)=>{
    try{
   const user=await Post.findOne({link:req.params.link});
   const user1=await Post.find().skip(1).limit(30)
   if(!user) return res.redirect('/')
res.render('download',{data:user,data1:user1}); 
}
catch(e){
    res.send('something wrong')
}    
})


// get some pagese solutaions ===============
router.get('/home/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    console.log
    

    const user=await Post.find().sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find()
    const user1=await Post.find().skip(1).limit(30)
    res.render('home',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})


router.get('/hollywood/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    

    const user=await Post.find({cat:'hollywood'}).sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find({cat:'hollywood'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('hollywood',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})

router.get('/south/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    

    const user=await Post.find({cat:'south'}).sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find({cat:'south'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('south',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})

router.get('/punjabi/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    

    const user=await Post.find({cat:'punjabi'}).sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find({cat:'punjabi'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('punjabi',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})
router.get('/web/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    

    const user=await Post.find({cat:'Web'}).sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find({cat:'Web'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('web',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})

router.get('/bollywood/page/:name',async(req,res)=>{
    try{
        const count=Number(req.params.name);
    let index=(count*25)-25;
    

    const user=await Post.find({cat:'bollywood'}).sort({date:-1}).skip(index).limit(25)
    const lengthfor=await Post.find({cat:'bollywood'});
    const user1=await Post.find().skip(1).limit(30)
    res.render('bollywood',{data:user,data1:user1,data2:lengthfor});
    }
    catch(e){
        res.redirect('/');
        // console.log(e)
    }
})

router.get('/search',async(req,res)=>{
    if(!req.query.search) return res.redirect('/');
    const user1=await Post.find().skip(1).limit(30)
    let regex=new RegExp(req.query.search,'i');
    const user=await Post.find({movieNameD:regex})
    res.render('search',{data1:user1,data:user});

})


module.exports=router;