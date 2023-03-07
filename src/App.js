//Libraries
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Presentacion from "./pages/Income/Income";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Home from "./pages/Home/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Favorites from "./components/Favorites/Favorites";
import Search from "./pages/Search/Search";
import Movies from "./pages/Movies/Movies";
import TvShow from "./pages/TvShow/TvShow";
import Contact from "./pages/Contact/Contact";

//Styles
import "./index.css";

AOS.init();
function App() {
  //logica para levantar el estado y compartirlo a favoritos
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs"); //Levanta lo q tengo en storage

    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    //Comienza logica de favoritos
    const favMovies = localStorage.getItem("favs"); //Levanta lo q tengo en storage
    // console.log("levanto lo q tengo en storage", favMovies);
    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies); // como el storage lo trae en string lo paso a objeto
    }

    const btn = e.currentTarget; //capto el bootn

    const parent = btn.parentElement; // capto el padre del boton

    // capto los datos de cada elemento
    const imgUrl = parent.querySelector("img").getAttribute("src");

    // armo un objeto con esos datos
    const movieData = {
      imgUrl,
      dataMovieID: btn.dataset.movieId,
      category: btn.dataset.category,
    };

    // console.log(movieData);

    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.dataMovieID === movieData.dataMovieID;
    });
    // console.log("me retorna la pelicula con el mismo id", movieIsInArray);

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData); // lo paso al array
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs)); // piso lo del local y lo guardo ahi
      setFavorites(tempMoviesInFavs); // para q actualice el estado y no haga falta recargar la pagina
      // console.log(tempMoviesInFavs);

      // console.log("Se agrego la pelicula");
      toast.success("Se agrego la pelicula a favoritos!");
    } else {
      let removeFromFavs = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.dataMovieID !== movieData.dataMovieID;
      }); // djea las peliculas con distinto id, y la q es igual la saca
      localStorage.setItem("favs", JSON.stringify(removeFromFavs)); // piso lo del local y lo guardo ahi
      setFavorites(removeFromFavs);
      // console.log(removeFromFavs);
      // console.log("La pelicula se elimino de favoritos");
      toast.error("La pelicula se elimino de favoritos", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  // Pagination
  const [contador, setContador] = useState(1);

  const handleClick = () => {
    setContador(contador + 1);
    document.documentElement.scrollTop =
      document.documentElement.scrollHeight / 3;

    console.log("soy el contador", contador);
  };
  const handleClickLess = () => {
    document.documentElement.scrollTop =
      document.documentElement.scrollHeight / 3;
    setContador(contador - 1);
    console.log("soy el contador", contador);
  };

  return (
    <>
      <Toaster position="top-center" />
      <Header />

      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              contador={contador}
              handleClick={handleClick}
              handleClickLess={handleClickLess}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
        <Route path="/detail/:typeOF/:id" element={<ItemDetailContainer />} />
        <Route
          path="/movies"
          element={
            <Movies
              contador={contador}
              handleClick={handleClick}
              handleClickLess={handleClickLess}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
        <Route
          path="/tvshow"
          element={
            <TvShow
              contador={contador}
              handleClick={handleClick}
              handleClickLess={handleClickLess}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
        <Route
          path="/favorites/"
          element={
            <Favorites
              addOrRemoveFromFavs={addOrRemoveFromFavs}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              contador={contador}
              handleClick={handleClick}
              handleClickLess={handleClickLess}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
