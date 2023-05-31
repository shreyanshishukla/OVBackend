const Candidates = require("./model/candidates");

module.exports = async (req, res) => {
    console.log(req.body.index);
    if(!req.body.index){
        console.log("Enter the correct values!");
        res.sendStatus(404);
    }
    else{
        try{
            const candidate={
                _id: req.body.index,
                   
            }
            const Candidate_old =  await Candidates.find(candidate);
            console.log("vote", Candidate_old[0].Votes)
           
            const v=Candidate_old[0].Votes+1;

            const findCandidate = await Candidates.findOneAndUpdate(candidate,{Votes:v});
            
            
res.send("ok")
        }
        catch(err){
            console.log(err);
        }
    }
}