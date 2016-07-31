export const ADD_COUNTER = 'ADD_COUNTER';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function addCounter(name) {
    return { type: ADD_COUNTER, name: name }
}

export function increment(id) {
    return { type: INCREMENT, id: id }
}

export function decrement(id) {
    return { type: DECREMENT, id: id }
}
