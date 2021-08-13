import {useEffect, useState} from 'react';

import React from 'react';
import './Jokes.css';

import Joke from "../../components/Joke/Joke";
import JokesButton from "../../components/JokesButton/JokesButton";

const Jokes = () => {
    const [jokes, setJokes] = useState({});

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            getJoke().catch(e => console.error(e));
        }
    }, []);

    const getJoke = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (response.ok) {
            const joke = await response.json();

            setJokes(prevJokes => ({
                    ...prevJokes,
                    [joke.id]: joke
                })
            );
        }
    };

    return (
        <div className="Jokes">
            <h4>Jokes about Chuck Norris:</h4>

            {Object.values(jokes).map(joke => (
                <Joke
                    key={joke.id}
                    value={joke.value}
                />
            ))}

            <JokesButton
                onClick={getJoke}
            />
        </div>
    );
};

export default Jokes;