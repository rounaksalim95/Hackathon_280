const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Cache-Control", "no-cache");
    next();
  });

//Define all the routes
app.use(require("./routes/macroservices"));
app.use(require("./routes/debtservices"));
app.use(require("./routes/agriservices"));
app.use(require("./routes/importservices"));
app.use(require("./routes/yieldservices"));

const PORT = process.env.PORT || 5000;
//Server code will be running on port 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
