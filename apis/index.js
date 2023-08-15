const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/apis/test', (request,response) => {
    response.json('test-working!')
});

app.post('/apis/transaction', (request,response) => {
    response.json(request.body)
});

app.listen(5000);
// ^ port for backend