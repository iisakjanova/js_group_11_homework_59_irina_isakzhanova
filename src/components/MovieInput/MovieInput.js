import React, {Component} from 'react';

class MovieInput extends Component {
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
                        onChange={e => this.props.handleChange(e.target.value)}
                    />
                    <button
                        className="Btn"
                        type="button"
                        onClick={() => this.props.onAdd()}
                    >
                        Add
                    </button>
                </p>
            </form>
        );
    }
}

export default MovieInput;