const express = require("express");
const router = express.Router();
const fs = require('fs');
router.get('/import/pie/getFileData/:country/:year/:commodity', async(req,res)=> {
    const {parse} = require('csv-parse');
    let year = parseInt(req.params.year);
    let commodity = req.params.commodity;
    let country = req.params.country;
    if(country=='Saudi Arabia')
        country='Saudi';
    console.log(req.params);
    let result = [];    
    let parser1 = parse({columns: true}, async (err, records) => {
        let results = records.filter(rec=> {
            return parseInt(rec.Year)==parseInt(year);
        })
        await results.map(rec=> {
            let v = rec['Value']==null || isNaN(rec['Value'])?0:rec['Value'];
            if(v != 0) {
                result.push([rec['Partner Countries'],parseInt(v)]);
            }            
        })
        console.log(result)
        return res.status(200).send(result);
    });
    fs.createReadStream(__dirname+'/../csv/import/'+country+commodity+'.csv').pipe(parser1);
    
    
}) 
module.exports = router;