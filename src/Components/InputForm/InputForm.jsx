import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';

export default function InputForm(){

  const [data,setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [refreshData,setRefreshData] = useState(false);

  const getData = async () => {
    const response = await axios.get('http://localhost:3002/accounting')
    setData(response.data);
    setLoadingData(false);
  }

  useEffect(()=>{
    getData()
  },[refreshData]);


  return(    
    <section className="container">
    <h1>Accounting Software with Vite</h1>
    </section>
  );
}