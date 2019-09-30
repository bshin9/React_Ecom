const router = require('express').Router();
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
const connection = mysql.createConnection({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: "dB_schema"})

connection.connect();
// home page
router.get('/api', (req, res) => {
    res.send("home page");
});

// get products
router.get('/products', (req, res) => {
    let sql = `SELECT Products.*, Prices.price FROM Products INNER JOIN Prices ON Products.product_id = Prices.price_id GROUP BY product_id;`

    connection.query(sql, function (err, result) {
        if (err) {
            res.send(err);
            return
        }
        if (result.length === 0) {
            res.send(404);
            return
        }
        res.send(result);
    });
});

// get productfilter
router.get('/productfilter/:category', (req, res) => {

    let sql = `SELECT * FROM Products WHERE category = '` + (req.params.category) + `'`

    connection.query(sql, function (err, result) {
        if (err) {
            res.send(500);
            return
        }
        if (result.length === 0) {
            res.send(404);
            return
        }

        res.send(result);
    });
});

// get contacts
router.get('/contacts', (req, res) => {
    let sql = `SELECT * FROM Contacts`

    connection.query(sql, function (err, result) {
        if (err) {
            res.send(500);
            return
        }
        if (result.length === 0) {
            res.send(404);
            return
        }

        res.send(result);
    });
});

// post
router.post('/newcontact', (req, res) => {
    var sql = `INSERT INTO Contacts (firstname, lastname, email, user_name, message) VALUES ("` + (req.body.firstname) + '", "' + (req.body.lastname) + '", "' + (req.body.email) + '", "' + (req.body.user_name) + '", "' + (req.body.message) + '");';
    connection.query(sql, function (err, result) {
        if (err) {
            res.send(500);
            return
        }
        if (result.affectedRows === 1) {
            res.send('Successfully inserted new contact');
            return
        }
        res.send('Unsuccessfully inserted new contact');
        return
    });
});

// delete
router.delete('/deletecontact', (req, res) => {
    var sql = `DELETE FROM Contacts WHERE email = ("` + (req.body.email) + '");';
    connection.query(sql, function (err, result) {
        if (err) {
            res.send(500);
            return
        }
        if (result.affectedRows === 1) {
            res.send('Successfully deleted contact');
            return
        }
        res.send('Unsuccessfully deleted contact');
        return
    });
});

// update
router.put('/updatecontact', (req, res) => {
    var sql = `UPDATE Contacts SET user_name = ("` + (req.body.user_name) + `") WHERE contact_id = ("` + (req.body.contact_id) + `");`;
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            res.send(500);
            return
        }
        if (result.affectedRows === 1) {
            res.send('Successfully updated contact');
            return
        }
        res.send('Unsuccessfully updated contact');
        return
    });
});

module.exports = router;
