require('dotenv').config();
const express=require('express');
const ejs=require('ejs-lint');
const passport=require('passport');
const expressSession=require('express-session');
const {initializepassport ,isAuth}=require('../passportconfig');
initializepassport(passport)
require('../db/main');
const Login=require('../db/models/login')
const fileUpload=require('express-fileupload');
const app=express();

app.use(fileUpload({
    useTempFiles:true,
}))
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
const port=process.env.PORT || 3000;
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(expressSession({
    secret:"secret",
    resave:false,
    saveUninitialized:false,
}));
app.use(passport.initialize());
app.use(passport.session());


// all router
app.use('/',require('../routers/login'))
app.use('/login',isAuth,require('../routers/admin'))
app.use('/',require('../routers/home'))




app.get('/*',(req,res)=>{
    res.redirect('/');
})

app.listen(port,()=>{
    console.log('the port is listning on the ',port)
})