import React from 'react';

const Movie = props => {
    return (
        <form>
            <p className="InputField">
                <input
                    type="text"
                    value={props.value}
                    onChange={e => props.handleChange(props.id, e.target.value)}
                />
                <button
                    className="Btn"
                    type="button"
                    onClick={() => props.handleDelete(props.id)}
                >
                    X
                </button>
            </p>
        </form>
    );
};

const MemoizedMovie = React.memo(Movie, (prev, next) => {
    return prev.value === next.value;
});

export default MemoizedMovie;