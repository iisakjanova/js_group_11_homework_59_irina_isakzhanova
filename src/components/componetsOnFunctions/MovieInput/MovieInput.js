import React from 'react';

const MovieInput = props => {
    return (
        <form>
            <p className="InputField">
                <input
                    type="text"
                    value={props.value}
                    onChange={e => props.handleChange(e.target.value)}
                />
                <button
                    className="Btn"
                    type="button"
                    onClick={() => props.onAdd()}
                >
                    Add
                </button>
            </p>
        </form>
    );
};

const MemoizedMovieInput = React.memo(MovieInput, (prev, next) => {
    return prev.value === next.value;
});

export default MemoizedMovieInput;