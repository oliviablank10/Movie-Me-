import React from 'react'

const Favorites = (props)=>{
    const FavComp = props.favComp;
    if(props.movies){
    return (
        <> 
            {props.movies.map((movie, index)=> (
                 <>
                <div className="flip-card">
                <div className="flip-card-inner">
                 <div className="flip-card-front">
                <img src={movie.Poster} alt='movie' className="moviePoster"></img>
                </div>
                <div className="flip-card-back">
                <h4 className="movieName">{movie.Title}</h4> 
                <p className="movieYear">{movie.Year}</p> 
                </div>
            
                </div>
                <div onClick={()=> props.favoriteClick(movie)}>
                <FavComp />
                </div>
                </div>
                
            </>
        ))
        }
    
    </>
        
    );}
    else{
        return(<div></div>);
    }
    }


export default Favorites;
