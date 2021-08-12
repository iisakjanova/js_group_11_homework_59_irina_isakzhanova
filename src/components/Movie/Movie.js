import React, {Component} from 'react';

class Movie extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={e => this.props.handleChange(this.props.id, e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => this.props.handleDelete(this.props.id)}
                >
                    X
                </button>
            </form>
        );
    }
}

export default Movie;