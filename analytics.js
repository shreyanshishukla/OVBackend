const Candidates = require("./model/candidates");
const User=require('./model/user')
module.exports=async (req,res)=>{
    var a=0,b=0,c=0;
    try{
        
        const findCandidate = await Candidates.find({});
        
        a=findCandidate.length;

    
    }
    catch(err){
        console.log("Candidate cann't be fetched !");
        console.log(err);
    }
    try{
        
        const findUser = await User.find({});
        
        b=findUser.length;
   
    
    }
    catch(err){
        console.log("Candidate cann't be fetched !");
        console.log(err);
    }
    res.send({Analytics:{a,b,c}})
}