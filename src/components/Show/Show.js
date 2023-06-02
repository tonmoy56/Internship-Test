import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Summary from '../Summary/Summary';




const Show = ({show}) => {
    

  const [allsummary,setSummary]=useState({})



    const handlesummary=(id)=>

    {



  
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res=>res.json())
        .then(data=>setSummary(data))
  
      
          
            
    }

  
    return (
        <div className='d-flex'>
        
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={show?.show?.image?.medium} />
      <Card.Body>
        <Card.Title>{show.show.name}</Card.Title>
        <button onClick={()=>handlesummary(show.show.id)}>summary</button>
        {/* <Link to={`/summary/${show.show.id}`}>suu</Link> */}

       
  
      </Card.Body>
    </Card>


    <div>
    <Summary allsummary={allsummary}></Summary>
    </div>

         
      
 

    </div>
        
    );
};

export default Show;