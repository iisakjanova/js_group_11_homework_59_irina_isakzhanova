import {Component} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import './NewMoviesToWatch.css';

import MovieInput from "../../components/componentsOnClasses/MovieInput/MovieInput";
import Movie from "../../components/componentsOnClasses/Movie/Movie";

class NewMoviesToWatchOnClasses extends Component {
    state = {
        movies: {},
        currentMovie: '',
    }

    handleChangeInput = (value) => {
        this.setState(prevState => ({
            currentMovie: value
        }))
    };

    addMovie = () => {
        const id = nanoid();

        this.setState(prevState => ({
            movies: {
                ...prevState.movies,
                [id]: {name: this.state.currentMovie, id}
            },
            currentMovie: '',
        }))
    };

    handleChangeMovie = (id, value) => {
        this.setState(prevState => ({
            movies: {
                ...prevState.movies,
                [id]: {...prevState.movies[id], name: value}
            }
        }))
    };

    handleDeleteMovie = (id) => {
        this.setState(prevState => {
            const {[id]: _, ...rest} = prevState.movies;
            return {movies: rest}
        })
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