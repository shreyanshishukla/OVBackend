const jwt=require('jsonwebtoken')
module.exports=async function(email,firstName,lastName){

    try{
        let payload={
            email,
            name:firstName+lastName,

        }
        let token=await jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET)
        return token;

    }catch(err)
    {
        return err;
    }
}