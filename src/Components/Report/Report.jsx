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
        <tr key={"trHead"}>
        <th style={{color:"gold"}} key={"Balance"}>Balance</th>
        <th style={{color:"gold"}} key={"Bill"}>Bill</th>      
        <th style={{color:"gold"}} key={"Year"}>Year</th>
        <th style={{color:"gold"}} key={"Month"}>Month</th>
        <th style={{color:"gold"}} key={"Day"}>Day</th>
        </tr>
        </thead>      
        {data.map(accounting => 
          <tbody key={accounting.id+"tBody"}>
            <tr key={accounting.id+"trBody"}>
              <td key={accounting.id+"balance"}>{accounting.balance}</td>
              <td key={accounting.id+"isIncome"}>{accounting.isIncome==="true" ? "+" + accounting.bill : "-" + accounting.bill}</td>
              <td key={accounting.id+"y"}>{accounting.y}</td>
              <td key={accounting.id+"m"}>{accounting.m}</td>
              <td key={accounting.id+"d"}>{accounting.d}</td>        
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}