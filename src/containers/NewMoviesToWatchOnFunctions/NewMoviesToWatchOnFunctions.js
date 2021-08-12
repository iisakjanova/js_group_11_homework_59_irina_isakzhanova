import {useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import './NewMoviesToWatch.css';

import MovieInput from "../../components/componetsOnFunctions/MovieInput/MovieInput";
import Movie from "../../components/componetsOnFunctions/Movie/Movie";

const NewMoviesToWatchOnFunctions = () => {
    const [movies, setMovies] = useState({});
    const [currentMovie, setCurrentMovie] = useState('');

    const handleChangeInput = value => {
        setCurrentMovie(value);
    };

    const addMovie = () => {
        const id = nanoid();

        setMovies(prevMovies => (
            {
                ...prevMovies,
                [id]: {name: currentMovie, id}
            }
        ));
        setCurrentMovie('');
    };

    const handleChangeMovie = (id, value) => {
        setMovies(prevMovies => (
            {
                ...prevMovies,
                [id]: {...prevMovies[id], name: value}
            }
        ))
    };

    const handleDeleteMovie = (id) => {
        setMovies(prevMovies => {
            const {[id]: _, ...rest} = prevMovies;
            return rest
        })
    };

    return (
        <div className="NewMoviesToWatch">
            <MovieInput
                value={currentMovie}
                handleChange={handleChangeInput}
                onAdd={addMovie}
            />

            {Object.keys(movies).length > 0 ? <h4>To watch list:</h4> : null}
            {Object.values(movies).map(movie => (
                <Movie
                    id={movie.id}
                    value={movie.name}
                    handleChange={handleChangeMovie}
                    key={movie.id}
                    handleDelete={handleDeleteMovie}
                />
            ))}
        </div>
    );
};

export default NewMoviesToWatchOnFunctions;