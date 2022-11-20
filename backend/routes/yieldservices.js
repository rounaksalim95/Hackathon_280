const express = require("express");
const router = express.Router();
const fs = require('fs');
router.get('/yield/getFileData/:startDate/:endDate/:country', (req,res)=> {
    const {parse} = require('csv-parse');
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let country = req.params.country;
    console.log(req.params);
    let parser = parse({columns: true}, async (err, records) => {
        let headers = Object.keys(records[0]);
        console.log("Headers: ",headers);
        const year =records.map(rec => rec[headers[0]]);
        const area = records.map(rec => rec[headers[1]]);
        const production =records.map(rec => rec[headers[2]]); 
        let recs = [];
            for(let i=0;i<year.length;i++) {
                let currYear = parseInt(year[i]);
                if(currYear!==null && currYear>=startDate && currYear<=endDate) {
                    let rest =  [currYear,parseInt(area[i]),parseInt(production[i])];
                    recs.push(rest);
                }
            }
        return res.status(200).send(recs);
    });
    
    fs.createReadStream(__dirname+'/../csv/yield/'+country+'.csv').pipe(parser);

}) 
module.exports = router;