export const ADD_COUNTER = 'ADD_COUNTER'

export function addCounter(name) {
    return { type: ADD_COUNTER, name: name }
}
