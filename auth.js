const jwt=require('jsonwebtoken')
module.exports={
    isLoggedIn:async function(req,res,next)
    {
        try{
            let token=req.headers.authorization;
            if(!token )
            return res.status(400).json({error:'user must be logged in'})
            else 
            {
                let profileData=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
                req.user=profileData;
                next();
            }

        }
        catch(err)
        {
            next(err)
        }
    }
}