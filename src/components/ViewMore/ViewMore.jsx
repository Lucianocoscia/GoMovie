import React from 'react'
import './ViewMore.css'

const ViewMore = ({loadMore}) => {
    
    
  return (
    <>
        <div className='btn-container'>
            <button onClick={loadMore} className='button-view-more'> View More</button>

        </div>
    </>
  )
}

export default ViewMore