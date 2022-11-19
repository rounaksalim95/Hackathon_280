const express = require("express");
const router = express.Router();
const fs = require('fs');
router.get('/agri/getFileData/:startDate/:endDate/:type/:country', (req,res)=> {
    const {parse} = require('csv-parse');
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let type = req.params.type;
    let country = req.params.country;
    if(country=='USA') {
        country='United States'
    }
    console.log(req.params);
    let result = [];
    let parser = parse({columns: true}, async (err, records) => {
        let headers = Object.keys(records[0]);
        let countryName = '';
        headers.map(hd=> {
            if(hd.includes('Country Name')) {
                countryName = hd;
            }
        })
        result = await records.filter(rec=> {
            //console.log(rec[countryName])
            return rec[countryName] == country;
            
        })
        //console.log(result);
        //filter according to date
        let keys = [];
        let recs = [];
        console.log(`header key ${countryName} and result len is ${result.length}`)
        await result.map(rec=> {
            if(keys.length==0) {
                keys = Object.keys(rec);
            }
            for(let i=0;i<keys.length;i++) {
                let year = keys[i]; //null if key is not 'year'
                if(year!=null && year>=startDate && year<=endDate) {
                    //console.log(rec[year].length)
                    let rdata = rec[year]==null || isNaN(rec[year]) || rec[year].length == 0?0:parseFloat(rec[year]);
                    let rest = [parseInt(year),parseFloat(rdata)]
                    recs.push(rest);
                }
            }
        })
        console.log('agri data:',recs);
        return res.status(200).send(recs);
    });
    
    fs.createReadStream(__dirname+'/../csv/agri/'+type+'.csv').pipe(parser);

}) 
module.exports = router;