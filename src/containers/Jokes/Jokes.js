import {useEffect, useState} from 'react';

import React from 'react';
import './Jokes.css';

import Joke from "../../components/Joke/Joke";
import JokesButton from "../../components/JokesButton/JokesButton";

const Jokes = () => {
    const [jokes, setJokes] = useState({});

    useEffect(() => {
        getJokes(3)
            .then(jokes => {
                const jokesObject = normalizeJokes(jokes);
                setJokes(jokesObject);
            })
            .catch(e => console.error(e));
    }, []);

    const normalizeJokes = jokesArray => {
        return jokesArray.reduce((acc, cur) => {
            return {
                ...acc,
                [cur.id]: cur
            }
        }, {});
    };

    const getSingleJoke = async () => {
        let joke;
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (response.ok) {
            joke = response.json();
        }

        return joke;
    };

    const getJokes = (n) => {
        const requests = [];

        for (let i = 0; i < n; i++) {
            requests.push(getSingleJoke());
        }

        return Promise.all(requests);
    };

    const handleNewJokes = async () => {
        const jokes = await getJokes(5)
        const jokesObject = normalizeJokes(jokes);

        setJokes(prevJokes => ({
                ...prevJokes,
                ...jokesObject
            })
        );
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
                onClick={handleNewJokes}
            />
        </div>
    );
};

export default Jokes;