const Candidates = require("./model/candidates");
module.exports=async (req,res)=>{
    try{
        console.log(req.body)
    await Candidates.deleteOne(req.body);
    //     console.log(findCandidate);
    //     candarra=findCandidate;
    //  console.log({Winnerdata:findCandidate[index]})
    //     res.send({Winnerdata:findCandidate[index]})
   res.sendStatus(200)
       
    }
    catch(err){
        console.log("Candidate cann't be fetched !");
        console.log(err);
    }
}