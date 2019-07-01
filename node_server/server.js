const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const urlencodedParser = body_parser.urlencoded({extended:false});

app.use(body_parser.json());
app.use(cors());


const url = 'mongodb://localhost:27017/'


//vendor methods

//add new vendor
app.post('/addVendor',urlencodedParser,(req,res) => {
    console.log(req.body);
    MongoClient.connect(url, {useNewUrlParser : true} ,(err,db) => {
        if(err) throw err;
        const obj = req.body;
        db.db('tportal').collection('vendors').insertOne(obj, (err,res) => {
            if(err) console.log("Error occurred "+ err);            
            console.log("Success")
            db.close();
        })
    })
    
    res.send({
        msg : "success"
    });
})


//add new dealer
app.post('/addDealer',urlencodedParser,(req,res) => {
    console.log(req.body);
    MongoClient.connect(url, {useNewUrlParser : true} ,(err,db) => {
        if(err) throw err;
        const obj = req.body;
        db.db('tportal').collection('dealers').insertOne(obj, (err,res) => {
            if(err) console.log("Error occurred "+ err);            
            console.log("Success")
            db.close();
        })
    })
    
    res.send({
        msg : "success"
    });
})

app.post('/loginVendor', urlencodedParser, (req,res) => {    
    const password = req.body.password;
    const phone = req.body.phone;    
    MongoClient.connect(url,{useNewUrlParser: true}, (err,db) => {
        
        if (err) console.log("Error "+ err);
        let query = {
            phone : phone,
            password : password
        };
        db.db("tportal").collection("vendors").find(query).toArray((err,ress) => {
            if (err) throw err;
            if (ress.length === 0) {
                res.send({
                    msg:"not found"
                });
            }
            else
            {
                res.send({
                    msg:"found",
                    user:ress[0]
                });
            } 
                
            db.close();
        })

        
    })
})

app.post('/createOrderVendor', urlencodedParser, (req,res) => {
    const phone1 = req.body.phone;
    const order1 = req.body.order;
    

    MongoClient.connect(url,{useNewUrlParser:true}, (err,db) => {
        if (err) throw err;
        db.db("tportal").collection("vendors").find({phone : phone1}).toArray((err,ress) => {
            if (err) throw err;
            const user = ress[0];            
            let arr = user.order;            
            arr.push(order1);

            
            const newValue = {$set :{order : arr}};

            MongoClient.connect(url,{useNewUrlParser:true}, (err,db) => {
                if (err) throw err;
                db.db("tportal").collection("vendors").updateOne({phone : phone1},newValue,(err,resUpdate) => {                    
                    if (err) {
                        res.send({
                            msg : "failure"
                        });
                        throw err;
                    }
                    console.log("Document Updated");                    
                    res.send({
                        msg : "success"
                    })
                })
            })            
        })
        db.close();
        
    })
})

//get order history for vendor
app.post("/getOrderHistoryVendor", urlencodedParser, (req,res) => {
    const phone = req.body.phone;
    
    MongoClient.connect(url, {useNewUrlParser : true}, (err,db) => {
        if (err) throw err;
        db.db("tportal").collection('vendors').find({phone : phone}).toArray( (err,resArr) => {
            if (err) throw err;
            const user = resArr[0];
            const orders = user.order;

            res.send({
                orders : orders
            });

            db.close();

        })
    })
})



//dealer methods
app.post('/addDealer',urlencodedParser,(req,res) => {
    console.log(req.body);
    MongoClient.connect(url, {useNewUrlParser : true} ,(err,db) => {
        if(err) throw err;
        const obj = req.body;
        db.db('tportal').collection('dealers').insertOne(obj, (err,res) => {
            if(err) console.log("Error occurred "+ err);            
            console.log("Success")
            db.close();
        })
    })
    
    res.send({
        msg : "success"
    });
})

app.post('/loginDealer', urlencodedParser, (req,res) => {    
    const password = req.body.password;
    const phone = req.body.phone;    
    MongoClient.connect(url,{useNewUrlParser: true}, (err,db) => {
        
        if (err) console.log("Error "+ err);
        let query = {
            phone : phone,
            password : password
        };
        db.db("tportal").collection("dealers").find(query).toArray((err,ress) => {
            if (err) throw err;
            if (ress.length === 0) {
                res.send({
                    msg:"not found"
                });
            }
            else
            {
                res.send({
                    msg:"found",
                    user:ress[0]
                });
            } 
                
            db.close();
        })

        
    })
})

app.post('/createOrderDealer', urlencodedParser, (req,res) => {
    
    const phone1 = req.body.phone;
    const order1 = req.body.order;
    

    MongoClient.connect(url,{useNewUrlParser:true}, (err,db) => {
        if (err) throw err;
        db.db("tportal").collection("dealers").find({phone : phone1}).toArray((err,ress) => {
            if (err) throw err;
            const user = ress[0];                        
            let arr = user.order;            
            arr.push(order1);
            
            const newValue = {$set :{order : arr}};

            MongoClient.connect(url,{useNewUrlParser:true}, (err,db) => {
                if (err) throw err;
                db.db("tportal").collection("dealers").updateOne({phone : phone1},newValue,(err,resUpdate) => {                    
                    if (err) {
                        res.send({
                            msg : "failure"
                        });
                        throw err;
                    }
                    console.log("Document Updated");                    
                    res.send({
                        msg : "success"
                    })
                })
            })            
        })
        db.close();
        
    })
})



let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Server running at '+port);
})