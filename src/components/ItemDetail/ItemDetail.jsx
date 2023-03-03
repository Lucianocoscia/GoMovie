import React from 'react'
import {  useEffect , useState } from 'react';
import '../../pages/ItemDetailContainer/ItemDetail.css';
import Trailer from './Trailer';
import Casts from './Casts';
import Similar from './Similar';
import { apiConfig } from '../../config/config';
import '../../pages/ItemDetailContainer/ItemDetail.css'
const ItemDetail = ({detailID}) => {

  const [loader, setLoader] = useState(true); 
  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  });

  if(loader){
    return(
        <>
        
        <div className='container-loader container'>
          <div className="loader"></div>

        </div>
        </>
    )
    }else{

      return (
      <>
          <div  className='background-detail'><img src={`${apiConfig.originalImage(detailID.backdrop_path)}`} alt="" /></div>

          <section className='detail-container container'>

            <div className='grid-container'>

              <div className='detail-poster-container'><img className='detail-poster' src={`${apiConfig.w500Image(detailID.poster_path)}`} alt={detailID.original_title}  /></div>

              <div className='flex-info-detail'>
                <h1 className='detail-title'> {detailID.original_title || detailID.name}</h1>
                <div className='container-button-genre'>
                  {detailID.genres.map(oneGenre =>
                                <button className='detail-button-genre' key={oneGenre.id }> {oneGenre.name}</button>)
                            }
                </div>
                <p className='detail-overview'>{detailID.overview}</p>

                
                <div>
                  <h3 className='title-cast'>Casts</h3>
                  <div className='grid-casts'>
                    <Casts/>
                  </div>
                  
                  
                </div>
              </div>
            </div> 
          </section>

          <section className='container'>
              <Trailer /> 
          </section>
          <section className='container mb-5' >
            <div>
              <h5>Similar</h5>
              <Similar detailID={detailID} />
            </div>
          </section>
      </>
    )
    }

}

export default ItemDetail
