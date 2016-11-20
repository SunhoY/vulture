export const FETCH_DOODLE_LIST = 'FETCH_DOODLE_LIST';
export const ADD_DOODLE = 'ADD_DOODLE';

export function fetchDoodleList(period) {
    return {type: FETCH_DOODLE_LIST, period};
}

export function addDoodle(doodle) {
    return {type: ADD_DOODLE, doodle};
}