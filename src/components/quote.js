import React from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class Quote extends React.Component {
    componentDidMount() {
        this.props.getMovieQuote()
    }

    render() {
        if (this.props.quote) {
            return (
                <div>{this.props.quote}</div>
            )
        }
        return (
            <div>

            </div>)
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote.quote
    }
}
export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
})(Quote);