// import React from 'react'
// import { useParams, Navigate } from "react-router-dom";
// import { useState, useEffect} from 'react';
// import swAlert from "@sweetalert/with-react";
// import Item from '../Item/Item';
// import axios from "axios";


// const Resultados = () => {
//   const  {keyword} = useParams();

//   //traigo toda la lista de peliculas
//   const [moviesList, setMoviesList] = useState([]);

//   useEffect(() => {
//     const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    
//     axios.get(endPoint).then((response) => {
//       const apiData = response.data;
//       setMoviesList(apiData.results);
//     }).catch((error) => {
//       swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
//     })
//   },[setMoviesList])



// //traigo soolo lo relacionado a lo q buscaron
//   const [ moviesResults, setMoviesResults] = useState([]);

//   const endPointMovie = `https://api.themoviedb.org/3/search/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&page=1&include_adult=false&query=${keyword}`

//   useEffect(()=>{
//     axios.get(endPointMovie).then((response) => {
//       const moviesDataSearch = response.data.results;
//       if(moviesDataSearch.length === 0) {
//         swAlert("Oops", "Hubo un problema, no hemos encontrado nada con ese nombre", "error");
//       }
//       setMoviesResults(moviesDataSearch);
//       console.log(moviesDataSearch);
//     }).catch((error) => {
//       swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
//     })

//   }, [keyword]);

//   let token=  sessionStorage.getItem("token");

//   return (
//         <>
//       {!token  && <Navigate to='/'/>}

//       {  keyword === null ? 
//         (
//         <>
//           <div className="grid-list">

//               {
//                 moviesList.map((oneMovie, index)=>{
//                   return(
//                     <div key={index} className="">
//                       <Item 
                        
//                         id= {oneMovie.id}
//                         title={oneMovie.title}
//                         overview={oneMovie.overview.substring(0, 100)}
//                         poster_path={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
//                       />
//                     </div>
//                   )

//                 })
//               }
//           </div> 
//         </>
//         )
//        : 
//         (
//           <>
//             {moviesResults.length === 0 && <h1>No hay resultados</h1> }
//             <div>Buscaste: <em>{keyword}</em></div>

//             <div className='grid-list-results'>
            
//                 {moviesResults.map((movieSearch, index)=>{
//                     return(
//                         <div key={index} className="">
            
//                             <Item 
//                             id= {movieSearch.id}
//                             title={movieSearch.title}
//                             overview={movieSearch.overview.substring(0, 100)}
//                             poster_path={`https://image.tmdb.org/t/p/w500/${movieSearch.poster_path}`}
//                             />
//                         </div>
//                     )
//                 })}
//             </div>
//           </>
//         ) 
//       }



        

        

//         </>
//   )
// }

// export default Resultados