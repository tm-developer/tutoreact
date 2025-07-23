import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movie from "./Movie.jsx";

const Movies = () => {

    const [data, setData] = useState([])

    axios.defaults.headers.common['Authorization'] = 'TOKEN'

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
