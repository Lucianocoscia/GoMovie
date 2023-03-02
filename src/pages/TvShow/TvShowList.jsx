import React from 'react'
import { useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from "axios";
import { apiConfig, category,  } from '../../config/config'
import toast, {Toaster} from 'react-hot-toast';

const TvShowList = ({contador, typeOF, addOrRemoveFromFavs}) => {
    const [tvShowList, setTvShowList] = useState([]);

    const getTvShowList = () =>{
      const endPoint = `${apiConfig.baseURL}discover/${category.tv}?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${contador}&with_watch_monetization_types=flatrate`
      
      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        if(contador === 1){
            setTvShowList(apiData.results);

        } else{
            setTvShowList(apiData.results);
        }
      }).catch((error) => {
        // console.log(error);
        toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde')
      })
    };

     
    
    useEffect(() => {
        getTvShowList()
    },[contador])
  return (
    <>
    <Toaster position="top-center"/>
    <div  className="grid-list-results">
        {
            tvShowList.map((oneMovie, index)=>{
                return(
                    <div key={index} className="">
                    <Item 
                        category={typeOF}
                        addOrRemoveFromFavs={addOrRemoveFromFavs}
                        id= {oneMovie.id}
                        title={oneMovie.title}
                        overview={oneMovie.overview.substring(0, 100)}
                        poster_path={`${apiConfig.w500Image(oneMovie.poster_path)}`}
                    />
                    </div>
                )
            })
        }
    </div> 
    
</>
  )
}

export default TvShowList