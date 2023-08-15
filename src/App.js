import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function processTransaction(ev) {
      ev.preventDefault();
      const url = process.env.REACT_APP_URL_FOR_API+'/transaction';
      // console.log(url);
      fetch(url,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name,description,datetime})
      }).then(response => {
        response.json().then(json => {
          console.log('result',json);});
      });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={processTransaction}>
        <div className='mainInputs'>
          <input type='text' 
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder={'+180 Asus Motherboard'}/>
          <input value={datetime}
          onChange={ev => setDatetime(ev.target.value)}
          type='datetime-local'/>
        </div>
        <div className='description'>
          <input type='text' 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          placeholder='purchased on sale for new pc build'/>
        </div>
        <button type='submit'>Add a new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Asus motherboard</div>
            <div className='description'>Part for pc build</div>
          </div>
          <div className='right'>
            <div className='price red'>-$180</div>
            <div className='datetime'>2023-08-05 12:41</div> 
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Garage sale</div>
            <div className='description'>Sold miscellaneous items</div>
          </div>
          <div className='right'>
            <div className='price green'>+$310</div>
            <div className='datetime'>2023-08-04 14:23</div> 
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Car repair cost</div>
            <div className='description'>Oil change</div>
          </div>
          <div className='right'>
            <div className='price red'>-$55</div>
            <div className='datetime'>2023-08-01 15:19</div> 
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
