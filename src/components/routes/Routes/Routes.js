import { createBrowserRouter, parsePath } from "react-router-dom";

import Summary from "../../Summary/Summary";
import Movie from "../../Movie/Movie";
import Booking from "../../Booking/Booking";

export  const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Movie></Movie>,

            children:[
                {
                    path:'/summary/:id',
                    element:<Summary></Summary>,
                    loader:(params)=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
                  
                   

                },

                {
                    path:'/booking',
                    element:<Booking></Booking>,
                  
                   

                }

            ]
        }
    ]
)