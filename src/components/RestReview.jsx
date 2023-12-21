import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
  const [open, setOpen] = useState(false);
  console.log(reviews);
  return (
    
    <>
                <button onClick={()=>setOpen(!open)} className='btn btn-warning m-3'> Click Here To See Reviews</button>

                <Collapse in={open}>
          <div className='mt-4'>
            {
              reviews?.map((item)=>(<>
                <hr />
            <h6> Name: {item.name} - date: {item.date}</h6>
            <p>Rating :{item.rating}</p>
            <p>{item.comments}</p>
              
              
              </>))


            }

          
          </div>
          </Collapse>
    </>
  )
}

export default RestReview