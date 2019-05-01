import { expect } from 'chai';

import reducer from '../reducer';
import * as actions from '../actions';

it('initialState shold be 0', () => {
    expect(reducer(undefined, {})).equals(0)
});

it('should increment state when calling increment action', () => {
    expect(
        reducer(0, actions.increment())
    ).equals(1)
});

it('should decrement state when calling decrement action', () => {
    expect(
        reducer(0, actions.decrement())
    ).equals(-1);
})

