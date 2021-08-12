import {Component} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import MovieInput from "../../components/MovieInput/MovieInput";

class NewMoviesToWatch extends Component {
    state = {
        movies: {},
        currentMovie: '',
    }

    handleChangeInput = (value) => {
        this.setState(prevState => ({
            currentMovie: value
        }))
    }

    addMovie = () => {
        this.setState(prevState => ({
            movies: {
                ...prevState.movies,
                [this.state.currentMovie]: {name: this.state.currentMovie, id: nanoid(),}
            },
            currentMovie: '',
        }))
    }

    render() {
        return (
            <div>
                <MovieInput
                    value={this.state.currentMovie}
                    handleChange={this.handleChangeInput}
                    onAdd={this.addMovie}
                />
            </div>
        );
    }
}

export default NewMoviesToWatch;