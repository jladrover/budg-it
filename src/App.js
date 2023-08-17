import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTranscations] = useState([]);

  useEffect(() => {
    getTransactions().then(setTranscations);
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_URL_FOR_API + '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function processTransaction(ev) {
      ev.preventDefault();
      const url = process.env.REACT_APP_URL_FOR_API + '/transaction';
      const price = name.split(" ")[0];
      
      // console.log(url);
      fetch(url,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ price,
          name:name.substring(price.length + 1),
          description,
          datetime,})
      }).then(response => {
        response.json().then(json => {
          setName("");
          setDescription("");
          setDatetime("");
          console.log('result',json);});
      });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }

  balance = balance.toFixed(2);
  const coinChange = balance.split(".")[1];
  balance = balance.split(".")[0]; 

  return (
    <main>
      <h1>${balance}<span>.{coinChange}</span></h1>
      <form onSubmit={processTransaction}>
        <div className='mainInputs'>
          <input type='text' 
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder={'-180 Asus Motherboard'}/>
          <input value={datetime}
          onChange={ev => setDatetime(ev.target.value)}
          type='datetime-local'/>
        </div>
        <div className='description'>
          <input type='text' 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          placeholder='purchased for new pc build'/>
        </div>
        <button type='submit'>Add a new transaction</button>
      </form>
      <div className='transactions'>
        {transactions.length > 0 && transactions.map(transaction => (
          <div className='transaction'>
          <div className='left'>
            <div className='name'>{transaction.name}</div>
            <div className='description'>{transaction.description}</div>
          </div>
          <div className='right'>
            <div className={'price ' + (transaction.price > 0?'green':'red')}>
              {transaction.price}
            </div>
            <div className='datetime'>{transaction.datetime}</div> 
          </div>
        </div>
        ))}
        
      </div>
    </main>
  );
}

export default App;
