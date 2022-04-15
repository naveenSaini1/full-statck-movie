const express=require('express');
const passport=require('passport');
// const { initializepassport, isAuth } = require('../passportconfig');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',passport.authenticate('local',{failureRedirect:'/login',successRedirect:'/'}),(req,res)=>{
    res.redirect('/')
})
// router.post('/login',(req,res)=>{
//     console.log(req.body)
// })


module.exports=router;