import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';


const Summary = ({allsummary}) => {
    // const [newdata,setData]=useState(allsummary)

    const [booking,setSummary]=useState({})

    

    const handlebook=(id)=>{
        

        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res=>res.json())
        .then(data=>setSummary(data))
        
  

        


    }
   
   
    return (
        <div>
           <div>
             <h1>{allsummary.summary}</h1>

           {
            allsummary.summary? <Link to={'/booking'} onClick={()=>handlebook(allsummary.id)}>Booking</Link>: ''
           }
           </div>

           {
            allsummary.summary? <Booking booking={booking}></Booking>: ''
           }

         

          

         
        </div>
    );
};

export default Summary;