const Candidates = require("./model/candidates");
let candarra=[]
let vote=[]
const result=async(req,res)=>{
    let ans=-1;
    let maxx=-1;
    vote.forEach((v,index)=>{
        if(v>maxx){ans=index;
        maxx=v};
    })
    if(ans!=-1)
 {   console.log({
        winner:candarra[ans]
    })
   return res.send({winner:ans})}
   console.log("no winner")
    return res.send({
        winner:"NONE"
    })
}
const resultdata=async(req,res,index)=>{
   
 
    try{
        
        const findCandidate = await Candidates.find({});
        console.log(findCandidate);
        candarra=findCandidate;
     console.log({Winnerdata:findCandidate[index]})
        res.send({Winnerdata:findCandidate[index]})

       
    }
    catch(err){
        console.log("Candidate cann't be fetched !");
        console.log(err);
    }
}
const voting=async(req,res)=>{
    console.log("votingggg...")
    vote[req.body.index]++;
    console.log(vote)
    res.sendStatus(200)
}
const fetchingCandidates = async (req, res) => {
    console.log("fetching...")
      vote=[];
        try{
        
            const findCandidate = await Candidates.find({});
            console.log(findCandidate);
            candarra=findCandidate;
            console.log(vote)
            findCandidate.forEach(c=>{
               console.log('Ssss',vote)
                vote.push(0);
            })
            res.send({Candidatesdata:findCandidate})

           
        }
        catch(err){
            console.log("Candidate cann't be fetched !");
            console.log(err);
        }
    }
module.exports={fetchingCandidates,result,voting,resultdata}