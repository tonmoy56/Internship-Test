

import React from 'react';

const Booking = ({booking}) => {

    console.log(booking)
    const handleForm=(event)=>{
        event.preventDefault()
        const name=event.target.name.value
        const rating=event.target.rating.value
        // console.log(name,rating)
        const bookinginfo={
            name:name,
            rating:rating
        }

        // console.log(bookinginfo)

        localStorage.setItem('user-info',JSON.stringify(bookinginfo))
    }
    return (
        <div>
            {
                booking.name?  <form onSubmit={handleForm}>

                 Movie Name  <input type="text" name='name' defaultValue={booking.name}/> <br /><br />

                 Rating: <input type="text" name='rating' defaultValue={booking?.rating?.average}/><br />


                    <button type='submit'>Submit</button>

             


                </form> :
                ''





            }
        </div>
    );
};

export default Booking;