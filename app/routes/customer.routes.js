module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    // By Ashish Ji 
   
    app.post("/mandate",customers.mandate);
    app.get("/getUserDetails",customers.getUserDetails);
};
