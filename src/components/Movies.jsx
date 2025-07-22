import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movie from "./Movie.jsx";

const Movies = () => {

    const [data, setData] = useState([])

    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjYxNDQ4NGQyZmIzOTRmNmI4YjA1M2U3OWM5OWIzOSIsIm5iZiI6MTc1MTg2NTY2OS4wMjgsInN1YiI6IjY4NmI1OTQ1MTQ1NjA0OTg0NDlhNDhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4PBo8wRjNtYOveVugDSq6CSo2tKWXUISSsHMHuqJ5IM'

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular')
            .then(res => setData(res.data.results));
    },[])


    return (
        <div>

            {data.map(film => (

                <Movie key={film.id}
                       filmInfo={film}
                />

            ))}
        </div>
    );
};

export default Movies;