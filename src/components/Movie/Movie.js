import React, {Component} from 'react';

class Movie extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    render() {
        return (
            <form>
                <p className="InputField">
                    <input
                        type="text"
                        value={this.props.value}
                        onChange={e => this.props.handleChange(this.props.id, e.target.value)}
                    />
                    <button
                        className="Btn"
                        type="button"
                        onClick={() => this.props.handleDelete(this.props.id)}
                    >
                        X
                    </button>
                </p>
            </form>
        );
    }
}

export default Movie;