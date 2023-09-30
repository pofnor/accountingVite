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
        <th className='th' key={"Balance"}>Balance</th>
        <th className='th' key={"Bill"}>Bill</th>      
        <th className='th' key={"Year"}>Year</th>
        <th className='th' key={"Month"}>Month</th>
        <th className='th' key={"Day"}>Day</th>
        </tr>
        </thead>      
        {data.map(accounting => 
          <tbody key={accounting.id+"tBody"}>
            <tr className='tr' key={accounting.id+"trBody"}>
              <td className='td' key={accounting.id+"balance"}>{accounting.balance}</td>
              <td className='td' key={accounting.id+"isIncome"}>{accounting.isIncome==="true" ? "+" + accounting.bill : "-" + accounting.bill}</td>
              <td className='td' key={accounting.id+"y"}>{accounting.y}</td>
              <td className='td' key={accounting.id+"m"}>{accounting.m}</td>
              <td className='td' key={accounting.id+"d"}>{accounting.d}</td>        
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}