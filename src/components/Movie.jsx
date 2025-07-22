import React from 'react';

const Movie = ({filmInfo, onClick}) => {

    console.log(filmInfo);

    let pathToMovie = `https://media.themoviedb.org/t/p/w220_and_h330_face${filmInfo.poster_path}`;


    return (
        <div  key={filmInfo.id} id={filmInfo.id} className="movie">
            <a href="">
                <img src={pathToMovie} alt={filmInfo.title}/>
                <span>{filmInfo.title}</span>
                <p>{filmInfo.overview}</p>
            </a>
        </div>
    );
};

export default Movie;