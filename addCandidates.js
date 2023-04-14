const Candidates = require("./model/candidates");

module.exports = async (req, res) => {
    console.log(req.body.firstName, req.body.lastName, req.body.party, req.body.age);
    if(!req.body.firstName || !req.body.lastName || !req.body.party || !req.body.age){
        console.log("Enter the correct values!");
        res.sendStatus(404);
    }
    else{
        try{
            const candidate={
                firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    party: req.body.party,
                    Age: req.body.age
            }
            const findCandidate = await Candidates.find(candidate);
            if(findCandidate.length == 0){
                const Candidate = new Candidates(candidate)
                const candidates = await Candidate.save().then(res.sendStatus(200));
            }
            else{
                console.log("Candidate already exists!");
                res.redirect("/admin/addCandidate");
            }
        }
        catch(err){
            console.log(err);
        }
    }
}