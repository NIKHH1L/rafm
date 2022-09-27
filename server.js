const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const login = require('./routes/login');
const projects = require('./routes/projects');
const users = require('./routes/users');
const bills = require('./routes/bills');
const loans = require('./routes/loans');
const funds = require('./routes/funds');
const inventory = require('./routes/inventory');
const stocks = require('./routes/stocks');
const employees = require('./routes/employees');
const complaints = require('./routes/complaints');
const sales = require('./routes/sales');

const app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rafm_dbad:db@rafm#adM@rafm.lrjexgd.mongodb.net/?retryWrites=true&w=majoriyt";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(cors());
app.use(express.json());

app.use('/login', login);
app.use('/projects', projects);
app.use('/users', users);
app.use('/bills', bills);
app.use('/loans', loans);
app.use('/funds', funds);
app.use('/inventory', inventory);
app.use('/stocks', stocks);
app.use('/employees', employees);
app.use('/complaints', complaints);
app.use('/sales', sales);

const mongoString = process.env.DB_URI;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.once('open', () => {
    console.log('DB connected');
});

// for deployment to heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`);
});
