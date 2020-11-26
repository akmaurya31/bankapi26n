const sql = require("./db.js");
const Customer = function(customer) {
 
};


//////////////////////////////////////
  Customer.mandate_normal  = (email, result) => {
//let sqlquery="SELECT * FROM users INNER JOIN user_bank ON users.id=user_bank.user_id where user_bank.isprimary_bank=1 and users.email='"+`${email}`+"'";
let sqlquery="SELECT * FROM users INNER JOIN user_bank ON users.id=user_bank.user_id INNER JOIN bank_accout_type ON user_bank.acoount_type=bank_accout_type.id where user_bank.isprimary_bank=1 and users.email='"+`${email}`+"'";
sql.query(sqlquery, (err, res) => {  
//sql.query("SELECT * FROM users where email='"+`${email}`+"'", (err, res) => {    
      console.log("m- line 351 ")
      if (Array.isArray(res) && res.length) {
      if (res[0].hasOwnProperty('email')) {  
      let u_id=res[0].id;
      //console.log("m- line 355 ",sqlquery)
      result(null, res);     }}
      else{   
        console.log("m- line 355 ",sqlquery)  
       //console.log("m- line 358 ")
       result(null, res);      
    }  
  });
  //return
  };


 

     //////////////////////////////////////////
     

        Customer.getUserDetails = (mydata, result) => {
          let email=mydata.email;
          let msg="";
          sql.query(`SELECT * FROM users where users.email='${email}'`, (err, ress) => {   
            console.log("User Data: ", ress);
        
            if (ress.length) {
              console.log("User details found");
            //result(null,{ status:200, message:"Bank details found successfully ",  data:res });
            msg=ress;
            //return;
          }
          else{  
            console.log("User details not found"); 
            //result(null,{ status:200, message:"User details not found ",  data:res });
            
        }
        });       

            sql.query(`SELECT user_bank.* FROM user_bank INNER JOIN users on users.id=user_bank.user_id where users.email='${email}'`, (err, res) => {   
              console.log("Bank Details: ", res);
          
              if (res.length) {
                console.log("Bank details found");
            
            //result(null,{ status:200, message:"User details found successfully ",  data:res });
            //msg=msg+res;
            //res.json({ status:200, message:msg,data11:"Validation Error" });
            result(null,{ status:200, message:"Bank Details and User details found successfully ",  data:{"User": msg ,"Bank": res} });
          }
          else{  
            console.log("Bank details not found"); 
            result(null,{ status:200, message:"Bank details not found ",  data: msg  });
        }
        });
      };
      

module.exports = Customer;
