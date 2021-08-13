import React from 'react';

const JokesButton = props => {
    return (
        <button
            type="button"
            onClick={() => props.onClick()}
        >
            New jokes
        </button>
    );
};

const MemoizedJokesButton = React.memo(JokesButton, (prev, next) => {
    return prev.children === next.children;
});

export default MemoizedJokesButton;