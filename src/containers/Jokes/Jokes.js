import {useEffect, useState} from 'react';

import React from 'react';
import './Jokes.css';

import Joke from "../../components/Joke/Joke";

const Jokes = () => {
    const [jokes, setJokes] = useState({});

    useEffect(() => {
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

        for (let i = 0; i < 5; i++) {
            getJoke().catch(e => console.error(e));
        }

    }, []);

    return (
        <div className="Jokes">
            <h4>Jokes by Chuck Norris:</h4>
            {Object.values(jokes).map(joke => (
                <Joke
                    key={joke.id}
                    value={joke.value}
                />
            ))}
        </div>
    );
};

export default Jokes;