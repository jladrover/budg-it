const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const Transaction = require('./models/transaction.js');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json());
app.get('/apis/test', (request, response) => {
    response.json('test-working!')
});

app.post('/apis/transaction', async (request,response) => {
    await mongoose.connect(process.env.MONGODB_URL);
    const {name,description, datetime, price} = request.body;
    const transaction = await Transaction.create({name,description,datetime, price});
    response.json(transaction);
});

app.get('/apis/transactions', async (request, response) => {
    await mongoose.connect(process.env.MONGODB_URL);
    const totalTransactions = await Transaction.find();
    response.json(totalTransactions);
});


app.listen(5000);
// ^ port for backend
// 