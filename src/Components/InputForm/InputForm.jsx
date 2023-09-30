import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './InputForm.css';
import Post from '../Post/Post';

export default function InputForm(){
  
  // const [loadingData, setLoadingData] = useState(true);
  const [balance, setBalance] = useState(0);
  const [bill, setBill] = useState('');
  const [yDate, setYDate] = useState('');
  const [mDate, setMDate] = useState('');
  const [dDate, setDDate] = useState('');
  const [isIncome, setIsIncome] = useState(false);
  const [error, setError] = useState('');

  const getBalance = async () => {
    const response = await axios.get('http://localhost:3002/accounting')
    setBalance(response.data[response.data.length-1].balance);    
    // setLoadingData(false);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    if((+yDate > 1999) && (+yDate < 2024) &&
    (+mDate > 0) && (+mDate < 13) &&
    (+dDate > 0) && (+dDate < 32)){
     if((+bill > 0)){   
       Post(balance,bill,isIncome,yDate,mDate,dDate);
       setBalance(0);       
       setBill('');
       setYDate('');
       setMDate('');
       setDDate('');
       setIsIncome('');
       setError('');
      } else setError("The Bill is invalid");
    } else setError("The Date is invalid"); 
    
  }
    
  useEffect(()=>{
    getBalance()
  },[balance]);

  return(    
    <form onSubmit={(e)=>{handleSubmit(e)}}>      
      <div className='input-group pt-5'>
        <div className='form-floating'>
          <input className='form-control' id='year' type='text' placeholder='Year' value={yDate} onChange={(e)=> setYDate(e.target.value)}></input>
          <label htmlFor='year'>Year</label>
        </div>
        <div className='form-floating'>
          <input className='form-control' id='month' type='text' placeholder='Month'value={mDate} onChange={(e)=> setMDate(e.target.value)}></input>
          <label htmlFor='month'>Month</label>
        </div>
        <div className='form-floating'>
          <input className='form-control' id='day' type='text' placeholder='Day'  value={dDate} onChange={(e)=> setDDate(e.target.value)}></input>
          <label htmlFor='day'>Day</label>
        </div>
      </div>
      <br></br>
      <div className='form-check-inline'>
        <div className='input-group'>
          <div className='input-group-text'>$</div>
          <div className='form-floating'>
            <input className='form-control' id='bill' type='number' placeholder='Bill' value={bill} onChange={(e)=> setBill(e.target.value)}></input>
            <label htmlFor='bill'>Bill</label>
          </div>
        </div>
      </div>
      <div className='form-check-inline'>
        <div className='form-check form-switch'>
          <input className='form-check-input' type="checkbox" id='checkboxIncome' name="checkboxIncome" checked={isIncome} onChange={(e)=> setIsIncome(!isIncome)}></input>
          <label htmlFor='checkboxIncome'  style={{color:"whitesmoke"}} className='from-check-label'>Income</label>
        </div>
      </div>
      <br></br><br></br>
      <button type='submit' className='btn btn-primary btn-lg'>Submit</button>
      <br></br><br></br>          
      <div className='input-group'>
        <div className='input-group-text' onClick={(e)=>getBalance()}>My Current Balance :</div>
        <div className='input-group-text' onClick={(e)=>getBalance()}>$</div>
        <input className='form-control' onClick={(e)=>getBalance()} type='number' value={balance} readOnly></input>            
      </div>
      <p className='prompt'>{error}</p>        
    </form>
  );
}