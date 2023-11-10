
import './App.css';
import { useEffect, useState } from 'react';

import Mainpage from './pages/Mainpage';

const api = process.env.REACT_APP_URL;

function App() {

  const [cardData , setCardData] = useState([]);
  const [userData , setUserData] = useState([]);


  async function fetchData (){
    try{
      
      let response = await fetch(api);
      let data = await response.json();
     
        setCardData(data.tickets);
        setUserData(data.users)
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (
    <div>

    <Mainpage ticketData={cardData} userData={userData}/>

    </div>
  );
}

export default App;
