//Libraries
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import swAlert from "@sweetalert/with-react";

//Components
import Login from "./components/Login/Login";
import Listado from "./pages/ItemListContainer/Listado";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Resultados from "./components/Resultados/Resultados";
import Home from "./pages/Home/Home";
import Favoritos from "./components/Favoritos/Favoritos";
import Registro from "./components/Registro/Registro";
import Buscador from "./pages/Buscador/Buscador";

//Styles
import "./index.css";

function App() {
  //logica para levantar el estado y compartirlo a favoritos
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs"); //Levanta lo q tengo en storage
    console.log(favsInLocal);

    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      // console.log(favsArray);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    //Comienza logica de favoritos
    const favMovies = localStorage.getItem("favs"); //Levanta lo q tengo en storage

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies); // como el storage lo trae en string lo paso a objeto
    }
    console.log(tempMoviesInFavs);

    const btn = e.currentTarget; //capto el bootn
    const parent = btn.parentElement; // capto el padre del boton

    // capto los datos de cada elemento
    const imgUrl = parent.querySelector("img").getAttribute("src");
    // const title = parent.querySelector(".card-title").innerText;
    // const overview = parent.querySelector(".card-text").innerText;

    // armo un objeto con esos datos
    const movieData = {
      imgUrl,
      // title,
      // overview,
      dataMovieID: btn.dataset.movieId,
    };
    // console.log(movieData);
    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.dataMovieID === movieData.dataMovieID;
    });
    // console.log(movieIsInArray);

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData); // lo paso al array
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs)); // piso lo del local y lo guardo ahi
      setFavorites(tempMoviesInFavs); // para q actualice el estado y no haga falta recargar la pagina
      // console.log(tempMoviesInFavs);

      console.log("Se agrego la pelicula");
      swAlert("Good job!", "Se agrego la pelicula a favoritos!", "success"); //PONER SWAL
    } else {
      console.log(
        "La pelicula ya fue agregada, por lo tanto se eliminara de favoritos "
      );
      swAlert("Oops", "La pelicula  fue eliminada de favoritos", "error");
      // PONER SWAL

      let removeFromFavs = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.dataMovieID !== movieData.dataMovieID;
      }); // djea las peliculas con distinto id, y la q es igual la saca
      localStorage.setItem("favs", JSON.stringify(removeFromFavs)); // piso lo del local y lo guardo ahi
      setFavorites(removeFromFavs);
    }
  };

  //logica para renderizar footer

  return (
    <>
      <Header favorites={favorites} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route
          path="/favoritos"
          element={
            <Favoritos
              addOrRemoveFromFavs={addOrRemoveFromFavs}
              favorites={favorites}
            />
          }
        />
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
