import { connect } from 'react-redux';

import { decrement, increment } from '../actions';

import CounterComponent from './CounterComponent';

const mapStateToProps = ({ counterReducer }, ownProps) => ({
    counter: counterReducer
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent)