import React, {Component} from 'react';

class MovieInput extends Component {

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={e => this.props.handleChange(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => this.props.onAdd()}
                >
                    Add
                </button>
            </form>

        );
    }
}

export default MovieInput;