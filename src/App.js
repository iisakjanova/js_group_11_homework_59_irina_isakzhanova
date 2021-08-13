import {useState} from "react";

import './App.css';

import NewMoviesToWatchOnClasses from "./containers/NewMoviesToWatchOnClasses/NewMoviesToWatchOnClasses";
import NewMoviesToWatchOnFunctions from "./containers/NewMoviesToWatchOnFunctions/NewMoviesToWatchOnFunctions";
import Jokes from "./containers/Jokes/Jokes";


const App = () => {
    const [task, setTask] = useState('task 01');

    const onRadioChange = e => {
        setTask(e.target.value);
    };

    const getTask = task => {
        switch (task) {
            case 'task 01':
                return <NewMoviesToWatchOnClasses />;
            case 'task 01+':
                return <NewMoviesToWatchOnFunctions />;
            case 'task 02':
                return <Jokes />;
            default:
                return <NewMoviesToWatchOnClasses />;
        }
    };
    return (
        <div className="App">
            <label className="taskOptionLabel">
                <input
                    className="TaskOptionInput"
                    type="radio"
                    checked={task === 'task 01'}
                    name="taskOption"
                    value="task 01"
                    onChange={onRadioChange}
                />
                Task 01
            </label>
            <label className="taskOptionLabel">
                <input
                    className="TaskOptionInput"
                    type="radio"
                    checked={task === 'task 01+'}
                    name="taskOption"
                    value="task 01+"
                    onChange={onRadioChange}
                />
                Task 01 addition
            </label>
            <label className="taskOptionLabel">
                <input
                    className="TaskOptionInput"
                    type="radio"
                    checked={task === 'task 02'}
                    name="taskOption"
                    value="task 02"
                    onChange={onRadioChange}
                />
                Task 02
            </label>
            {getTask(task)}
        </div>
    )

};

export default App;
