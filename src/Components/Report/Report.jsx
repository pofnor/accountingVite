import axios from 'axios';
import { useState } from 'react';

export default function Report(){
  const [data, setData] = useState([]);  

  const getData = async () => {
    const response = await axios.get('http://localhost:3002/accounting')
    setData(response.data);   
  }

  return(
    <div className='container'>      
      <button className='btn btn-primary btn-sm' onClick={(e)=> getData(e)}>Report</button>
      <br></br><br></br>
      <table className='table table-dark table-striped table-hover'>
        <thead key={"thead"}>
        <tr>
        <th style={{color:"gold"}}>Balance</th>
        <th style={{color:"gold"}}>Bill</th>      
        <th style={{color:"gold"}}>Year</th>
        <th style={{color:"gold"}}>Month</th>
        <th style={{color:"gold"}}>Day</th>
        </tr>
        </thead>      
        {data.map(accounting => 
          <tbody key={accounting.id+"tBody"}>
            <tr>
              <td>{accounting.balance}</td>
              <td>{accounting.isIncome==="true" ? "+" + accounting.bill : "-" + accounting.bill}</td>
              <td>{accounting.y}</td>
              <td>{accounting.m}</td>
              <td>{accounting.d}</td>        
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}