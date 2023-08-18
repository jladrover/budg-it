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

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT);
}

module.exports = app;  
// ^ port for backend
// 