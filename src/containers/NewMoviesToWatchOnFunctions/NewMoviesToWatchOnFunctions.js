import {useEffect, useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import './NewMoviesToWatch.css';

import MovieInput from "../../components/componetsOnFunctions/MovieInput/MovieInput";
import Movie from "../../components/componetsOnFunctions/Movie/Movie";

const moviesString = localStorage.getItem('movies');
const initialMovies = moviesString ? JSON.parse(moviesString) : {};

const NewMoviesToWatchOnFunctions = () => {
    const [movies, setMovies] = useState(initialMovies);
    const [currentMovie, setCurrentMovie] = useState('');

    useEffect(() => {
        saveInLocalStorage(movies);
    }, [movies]);

    const handleChangeInput = value => {
        setCurrentMovie(value);
    };

    const addMovie = () => {
        const id = nanoid();
        setMovies(prevState => (
            {
                ...prevState,
                [id]: {name: currentMovie, id}
            }
        ));

        setCurrentMovie('');
    };

    const handleChangeMovie = (id, value) => {
        setMovies(prevState => (
            {
                ...prevState,
                [id]: {...prevState[id], name: value}
            }
        ));
    };

    const handleDeleteMovie = (id) => {
        setMovies(prevState => {
                const {[id]: _, ...newMovies} = prevState;
                return newMovies;
            }
        );
    };

    const saveInLocalStorage = (movies) => {
        const moviesSerialized = JSON.stringify(movies);
        localStorage.setItem('movies', moviesSerialized);
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