import {Component} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import './NewMoviesToWatch.css';

import MovieInput from "../../components/componentsOnClasses/MovieInput/MovieInput";
import Movie from "../../components/componentsOnClasses/Movie/Movie";

const moviesString = localStorage.getItem('movies');
const initialMovies = moviesString ? JSON.parse(moviesString) : {};

class NewMoviesToWatchOnClasses extends Component {
    state = {
        movies: initialMovies,
        currentMovie: '',
    };

    handleChangeInput = value => {
        this.setState(prevState => ({
            currentMovie: value
        }));
    };

    addMovie = () => {
        const id = nanoid();

        const newState = {
            movies: {
                ...this.state.movies,
                [id]: {name: this.state.currentMovie, id}
            },
            currentMovie: '',
        };

        this.setState(newState);
        this.saveInLocalStorage(newState.movies);
    };

    handleChangeMovie = (id, value) => {
        const newState = {
            movies: {
                ...this.state.movies,
                [id]: {...this.state.movies[id], name: value}
            }
        };

        this.setState(newState);
        this.saveInLocalStorage(newState.movies);
    };

    handleDeleteMovie = id => {
        const {[id]: _, ...newMovies} = this.state.movies;
        this.setState({movies: newMovies});
        this.saveInLocalStorage(newMovies);
    };

    saveInLocalStorage(movies) {
        const moviesSerialized = JSON.stringify(movies);
        localStorage.setItem('movies', moviesSerialized);
    };

    render() {
        return (
            <div className="NewMoviesToWatch">
                <MovieInput
                    value={this.state.currentMovie}
                    handleChange={this.handleChangeInput}
                    onAdd={this.addMovie}
                />

                {Object.keys(this.state.movies).length > 0 ? <h4>To watch list:</h4> : null}
                {Object.values(this.state.movies).map(movie => (
                    <Movie
                        id={movie.id}
                        value={movie.name}
                        handleChange={this.handleChangeMovie}
                        key={movie.id}
                        handleDelete={this.handleDeleteMovie}
                    />
                ))}
            </div>
        );
    }
}

export default NewMoviesToWatchOnClasses;