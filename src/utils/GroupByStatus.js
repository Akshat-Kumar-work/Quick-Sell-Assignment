
 let ans = {
    "Todo": [],
    "In progress": [],
    "Backlog": [],
    "Done": [],
    "Canceled": [],
  }


export default function ByStatus(Tickets){
    
   for(let singleTicket of Tickets){
    //console.log("single ticket",singleTicket)
    ans[singleTicket.status].push(singleTicket);
    }

    return ans;
}

