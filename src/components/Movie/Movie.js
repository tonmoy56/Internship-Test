import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';

const Movie = () => {

    const [shows,setShow]=useState([])

    useEffect(()=>{

        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>setShow(data))

    },[])



    


    return (
        <div className=''>
            {
                shows.map(show=><Show show={show}></Show>)
            }
        </div>
    );
};

export default Movie;