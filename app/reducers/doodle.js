import {LIST_DOODLE} from '../actions/doodle';

const initialState = {
    doodleList: []
};

export default function doodle(state = initialState, action) {
    switch (action.type) {
        case LIST_DOODLE:
            return Object.assign({}, state, {
                doodleList: action.value
            });

        default:
            return state;
    }
}