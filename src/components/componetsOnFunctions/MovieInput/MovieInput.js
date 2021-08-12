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

const MemorizedMovieInput = React.memo(MovieInput,(prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});

export default MemorizedMovieInput;