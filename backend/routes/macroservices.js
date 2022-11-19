const express = require("express");
const router = express.Router();
const fs = require("fs");
router.get(
  "/macro/getFileData/:startDate/:endDate/:headerType/:type/:country",
  (req, res) => {
    const { parse } = require("csv-parse");
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let type = req.params.type;
    let country = req.params.country;
    console.log(req.params);

    let headerType = "";
    let result = [];
    if (req.params.headerType === "GDP growth") {
      headerType = req.params.headerType + " (annual %) " + country;
      console.log("In1");
    } else if (req.params.headerType === "GDP (current US$)") {
      headerType = req.params.headerType + " " + country;
      console.log("In2");
    } else if (req.params.headerType === "CurrentAccountBalance") {
      headerType = country;
    } else if (req.params.headerType === "Foreign direct investment") {
      headerType =
        req.params.headerType + ", net (BoP, current US$) " + country;
    } else if (
      req.params.headerType === "Foreign direct investment, net outflows"
    ) {
      headerType = req.params.headerType + " (BoP, current US$) " + country;
    } else if (
      req.params.headerType === "Foreign direct investment, net inflows"
    ) {
      headerType = req.params.headerType + " (% of GDP) " + country;
    } else if (req.params.headerType === "Foreign_direct_investment_percent") {
      headerType =
        "Foreign direct investment, net outflows (% of GDP) " + country;
      type = "FDINetOutflows(%ofGDP)";
    }
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + headerType
    );
    //let headerType = req.params.headerType + " (annual %) " + country;
    let parser = parse({ columns: true }, async (err, records) => {
      //console.log(Object.keys(records[0]))
      result = await records.filter((rec) => {
        let yearInCsv = rec[Object.keys(rec)[0]]; //get year in csv
        yearInCsv = parseInt(yearInCsv);
        // let syear = parseInt(rec['Year']);

        if (yearInCsv >= startDate && yearInCsv <= endDate) {
          //console.log('hell yeah');
          return true;
        } else return false;
      });
      result.push();
      result = await result.map((rec) => {
        let yearInCsv = rec[Object.keys(rec)[0]]; //get year in csv
        console.log(yearInCsv);
        yearInCsv = parseInt(yearInCsv);
        let rest = [parseInt(yearInCsv), parseInt(rec[headerType])];
        return rest;
      });
      console.log(result);
      res.status(200).send(result);
      console.log(result);
    });

    fs.createReadStream(__dirname + "/../csv/macro/" + type + ".csv").pipe(
      parser
    );
  }
);

module.exports = router;
