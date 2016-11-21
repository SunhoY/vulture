import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config/FirebaseConfig';
import {FETCH_DOODLE_LIST} from '../actions/doodle';

const doodleReference = firebase.initializeApp(FIREBASE_CONFIG).database().ref("doodles");

console.log(doodleReference);

const initialState = {
    reference: doodleReference
};

export default function firebaseDoodle(state = initialState, action) {
    return state;
}