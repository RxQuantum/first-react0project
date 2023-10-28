import React from "react";

const MovieCard = ({ movie }) => {
    return(
        // <div className="movie">
        // <div>
        //   <p>{movie.Year}</p>
        // </div>

        // <div className="image">
        //   <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
        //   <div className="type-title">
        //     <span>{movie.Type}</span>
        //     <h3 >{movie.Title}</h3>
        //   </div>
        // </div>
        // </div>

        <div className="movie-card">
        <div className="image">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
          <div className="movie-details">
          <p>{movie.Year}</p>
          <div className="type-title">
            <span>{movie.Type}</span>
            <h3 >{movie.Title}</h3>
          </div>
          </div>
        </div>
        </div>
    );
}

export default MovieCard;