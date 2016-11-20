import {ActionConst} from 'react-native-router-flux';

const initialState = {
    scene: {}
};

export default function reducer(state = initialState, action ={}) {
    switch(action.type) {
        case ActionConst.FOCUS:
            let nextState = {
                ...state,
                scene: action.scene
            };
            return nextState;

        default:
            return state;
    }
}