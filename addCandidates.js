const Candidates = require("./model/candidates");

module.exports = async (req, res) => {
    console.log(req.body.firstName, req.body.lastName, req.body.party, req.body.contact);
    if(!req.body.firstName || !req.body.lastName || !req.body.party || !req.body.contact){
        console.log("Enter the correct values!");
        res.sendStatus(404);
    }
    else{
        try{
            const findCandidate = await Candidates.find({contact: req.body.contact});
            if(findCandidate.length == 0){
                const Candidate = new Candidates({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    party: req.body.party,
                    contact: req.body.contact
                })
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