"use strict";
const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
// const Account = require("./api/models/account");
const bodyParser = require('body-parser');
require("dotenv").config(); 

var Schema = mongoose.Schema;

var routes = require('./api/routes/bankRoutes'); //importing route

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";


// App
const app = express();


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
const accountSchema = new Schema({
  account_number: {
    type: String,
    // required:true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  current_balance: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
});

const Account = mongoose.model('Account', accountSchema);

const dummyAccount = new Account ({
    account_number:'123455',
    created_date: Date.now,
    current_balance: 50.50

});

dummyAccount.save().then(()=> console.log("new account added"));

app.get('/accounts', (req,res)=>{
    Account.find({},(found,err)=> {
        if(!err){
            res.send(found);
        }
        console.log(err);
        res.send("error occured!")
    })
})

// mongoose.Promise = global.Promise;
// // mongoose
// //   .connect("mongodb://localhost:27017/Bankdb")
// //   .catch((error) => console.error(error)); 


//   try {
//      mongoose.connect("mongodb://localhost:8080/Bankdb");
//   } catch (error) {
//     handleError(error);
//   }



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route


async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => console.log(` -${db.name}`));
}

async function main() {
  const url =
    "mongodb+srv://Khifayat:BforBolu99@cluster0.2az67.mongodb.net/BudgetSmartBank?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

// Endpoints

// GET HOME
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post('/create-account', () => {
//     res.
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// create an account POST
//get inromation GET
