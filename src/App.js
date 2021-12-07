import './App.css';
import './index.css'
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import React, { useState , useEffect} from 'react';
import MovieInfo from './components/MovieInfo';
import FavButton from './components/FavButton';
import UnFavButton from './components/UnFavButton';

//pulling from API
const App= () => {
  
  const [movies, setMovies] =useState([]);
  const[fav, setFav] =useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const getMovieResult = async (searchTerm)=> {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=526cd5e0`;

    const result = await fetch(url);
    const resultJson = await result.json();


    if(resultJson.Search){
      setMovies(resultJson.Search);
    }
  };

  useEffect(()=>{
    getMovieResult(searchTerm);
  }, [searchTerm]);

  useEffect(()=>{
    const savedFavs = JSON.parse(localStorage.getItem('movie-me-favs'));
    setFav(savedFavs)
  }, []);
  const addToFavorites = (movie) => {
    const newFav =[...fav, movie]
    setFav(newFav);
    savingFavorites(newFav);
  };

  const removeFavorites = (movie) => {
    const newFav = fav.filter((fav) => fav.imdbID != movie.imdbID);
    setFav(newFav);
    savingFavorites(newFav);
  };
  // https://medium.com/wesionary-team/creating-favorites-list-using-localstorage-in-react-part-i-22692bc0f153
  const savingFavorites = (favorites) => {
    localStorage.setItem('movie-me-favs', JSON.stringify(favorites))
  }
  return(
    <div className="App">
    <header>
    <h1>Movie Me!</h1>

    </header>
    <main>
    <div className="results">
        <h2>Your Favorites</h2>
        <div className="row">
    <Favorites
      movies={fav} 
      favoriteClick = {removeFavorites} 
      favComp = {UnFavButton}
    />

    </div>
     </div>
  
    <SearchBar searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>
    <div className="results">
            <h2>Search Results</h2>
    <div className="row">
    <MovieInfo 
      movies={movies} 
      favoriteClick = {addToFavorites} 
      favComp = {FavButton}
    />

    </div>
    </div>
    
    </main>
    </div>
  )
}

export default App;
