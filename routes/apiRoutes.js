var path = require('path');
const router = require("express").Router();
const mysql = require("mysql");
require("dotenv").config();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: "dB_schema"
});

connection.connect();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

router.get("/", (req, res) => {
    // res.send(true);
    console.log(' __dirname + "/public/" + "index1.html" - ',  __dirname + "../public/" + "index1.html" )
    res.sendFile( path.resolve(__dirname + "/../client/public/" + "index.html" ));
})

// get products
router.get("/products", (req, res) => {
  let sql =
    "SELECT Products.*, Prices.price FROM Products INNER JOIN Prices ON Products.product_id = Prices.price_id GROUP BY product_id;";

  connection.query(sql, function(err, result) {
    if (err) {
      res.sendStatus(500);
      res.send(err);
      return;
    }
    if (result.length === 0) {
      res.send(404);
      return;
    }
    res.send(result);
  });
});

// get the productfilter by category
router.get("/productfilter/:category", (req, res) => {
  // setting a var category equal to my parameter so it will be easier to call later
  var category = req.params.category;
  // let sql equals the mysql query which retrieves information from mysql database
  // the ? marks here indicate the var category I set above so I will be protected from sql injections
  let sql =
    "SELECT Products.*, Prices.price FROM Products INNER JOIN Prices ON Products.product_id = Prices.price_id WHERE category = ?;";
  // passing in the sql and category through the connection.query 
  connection.query(sql, [category], function(err, result) {
    // if there is no response, it will return a 500 error which means it is an internal server problem
    if (err) {
      res.send(500);
      return;
    }
    // if the length of the response we get back is equal to 0, it will return a 404 error which means it is a client-side problem
    if (result.length === 0) {
      res.send(404);
      return;
    }
    res.send(result);
  });
});

// getting the price filter using query's of low and high
router.get("/pricefilter/:low/:high", (req, res) => {
  var low = req.params.low;
  var high = req.params.high;
  let sql =
    "SELECT Products.*, Prices.price FROM Products INNER JOIN Prices ON Products.product_id = Prices.price_id WHERE Prices.price < ? AND Prices.price > ?;";
  connection.query(sql, [high, low], function(err, result) {
    if (err) {
      res.send(500);
      return;
    }
    if (result.length === 0) {
      res.send(404);
      return;
    }
    res.send(result);
  });
});

// get contacts
router.get("/contacts", (req, res) => {
  let sql = "SELECT * FROM Contacts;";

  connection.query(sql, function(err, result) {
    if (err) {
      res.send(500);
      return;
    }
    if (result.length === 0) {
      res.send(404);
      return;
    }
    res.send(result);
  });
});

// get post to input new contact information
router.post("/newcontact", (req, res) => {
    
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var user_name = req.body.user_name;
  var message = req.body.message;
  var sql =
    "INSERT INTO Contacts (firstname, lastname, email, user_name, message) VALUES (?, ?, ?, ?, ?);";
  connection.query(sql, [firstname, lastname, email, user_name, message], function(err, result) {
      if (err) {
        res.send(err)
      }
      res.send(result)
    }
  );
});

// delete contact out of the database
router.delete("/deletecontact", (req, res) => {
  var contact_id = req.body.contact_id;
  var sql = "DELETE FROM Contacts WHERE contact_id = ?;";
  connection.query(sql, [contact_id], function(err, result) {
    if (err) {
      res.send(500);
      return;
    }
    if (result.affectedRows === 1) {
      res.send("Successfully deleted contact");
      return;
    }
    err.send("Unsuccessfully deleted contact");
    return;
  });
});

// update existing contact
router.put("/updatecontact", (req, res) => {
  var message = req.body.message;
  var contact_id = req.body.contact_id;
  var sql = "UPDATE Contacts SET message = ? WHERE contact_id = ?;";
  connection.query(sql, [message, contact_id], function(err, result) {
    if (err) {
      res.send(500);
      return;
    }
    if (result.affectedRows === 1) {
      res.send("Successfully updated contact");
      return;
    }
    res.send("Unsuccessfully updated contact");
    return;
  });
});

module.exports = router;
