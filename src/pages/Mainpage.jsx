import React, { useState } from 'react'
import Cards from '../components/Cards/Cards'
import GroupByStatus from '../utils/GroupByStatus';

const Mainpage = ({ticketData , userData}) => {



  const [ticketState , setTicket] = useState({});


  function func(){
   
    setTicket(GroupByStatus(ticketData));
    console.log(ticketState)
  }

 



  // for(let status in ticketState){
  //   ticketState[status].map( (ticket)=>{
  //     console.log(ticket)
  //   })
  // }



  return (
    <div>
    <button onClick={func} >Status
    </button>
    <Cards ticketData={ ticketData} />
    </div>
  )
}

export default Mainpage