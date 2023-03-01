import React from 'react'
import './ViewMore.css'



const ViewMore = ({ contador,handleClick, handleClickLess }) => {

  return (
    <>

        <div className='btn-container'>
            {
              contador === 1 ? (
                <button onClick={handleClick}  className='button-view-more'> View More</button>

              ): (
                <>  
                  <button onClick={handleClickLess}  className='button-view-less'> View less</button>
                  <button onClick={handleClick}  className='button-view-more'> View More</button>
                </>
              )
            }
            
        </div>
    </>
  )
}

export default ViewMore