const Candidates = require("./model/candidates");

module.exports = async (req, res) => {
    console.log("fetching...")
   
        try{
        
            const findCandidate = await Candidates.find({});
            console.log(findCandidate);
            res.send({Candidatesdata:findCandidate})

           
        }
        catch(err){
            console.log("Candidate cann't be fetched !");
            console.log(err);
        }
    }
