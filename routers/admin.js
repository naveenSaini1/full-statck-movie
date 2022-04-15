const express=require('express');
const router=express.Router()
const Post=require('../db/models/post')
const Contact=require('../db/models/contact');
const cloudnary=require('cloudinary').v2;
cloudnary.config({ 
    cloud_name: "nmovies", 
    api_key: "266918328424423", 
    api_secret: "7WqzWwBngXGbxoE5kaCkqQxXfvY",
  });

router.get('/admin',async(req,res)=>{
    const postData=await Post.find();
    const mess=await Contact.find();
    postData.reverse()
    res.render('admin',{postDat:postData,mess:mess});
    // console.log(req.body)
})
router.post('/admin',async (req,res)=>{
    const user= await Post.findOne({movieName:req.body.movieName})
    if(user) return res.send('post already exits');
    if(!user){
        
        const file=req.files.img;
        cloudnary.uploader.upload(file.tempFilePath,(err,result)=>{
            const newUser=new Post({
                movieName:req.body.movieName,
                movieNameD:req.body.movieNameD,
                keyword:req.body.keyword,
                img:result.url,
                series:req.body.series,
                Lan:req.body.Lan,
                cat:req.body.cat,
                quality:req.body.quality,
                rDate:req.body.rDate,
                downloadALink:req.body.downloadALink,
                downloadBLink:req.body.downloadBLink,
                downloadCLink:req.body.downloadCLink,
                story:req.body.story,
                des:req.body.des,
            })
            newUser.save()
            .then((data)=>{
                res.redirect('/')
            })
            .catch((e)=>{
                res.send(e);
            })
        })
    }
})

router.get('/admin/del/:link',async(req,res)=>{
    const user= await Post.findOneAndDelete({link:req.params.link})
    res.redirect('/login/admin');
})

router.get('/admin/edit/:link',async(req,res)=>{
       const user=await Post.findOne({link:req.params.link});
       if(!user) return res.redirect('/')
    res.render('edit',{data:user}); 

})

router.post('/admin/edit/:link',async(req,res)=>{
    const user= await Post.updateOne({link:req.params.link},{
        movieName:req.body.movieName,
        movieNameD:req.body.movieNameD,
        keyword:req.body.keyword,
        img:req.body.img,
        series:req.body.series,
        Lan:req.body.Lan,
        cat:req.body.cat,
        quality:req.body.quality,
        rDate:req.body.rDate,
        downloadALink:req.body.downloadALink,
        downloadBLink:req.body.downloadBLink,
        downloadCLink:req.body.downloadCLink,
        story:req.body.story,
        des:req.body.des,
    })
    res.redirect('/login/admin')
})

module.exports=router;