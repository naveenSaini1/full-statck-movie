const Login = require('./db/models/login');
const localStatgy=require('passport-local').Strategy;
const initializepassport =(passport)=>{
    passport.use(new localStatgy( async(username,password,done)=>{
        try{
            const user=await Login.findOne({username});
        if(!user) return done(null,false)
        if(user.password!==password) return done(null,false);
        return done(null,user);
        }
        catch(e){
            return(e,false);
        }
        

    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    })
    passport.deserializeUser(async (id,done)=>{
        try{
            const user=await Login.findById(id);
            done(null,user)
        }
        catch(e){
            done(e,false);
        }
    })

}

const isAuth=(req,res,next)=>{
    if(req.user) return next();
    res.redirect('/');
}

module.exports={initializepassport,isAuth};