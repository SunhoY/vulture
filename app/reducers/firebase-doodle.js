import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config/FirebaseConfig';
import {FETCH_DOODLE_LIST, ADD_DOODLE} from '../actions/doodle';

const doodleReference = firebase.initializeApp(FIREBASE_CONFIG).database().ref("doodles");

const initialState = {
    doodles: []
};

export default function firebaseDoodle(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOODLE_LIST:
            const {start, end} = action;

            doodleReference.orderByChild("createdAt").startAt(start).endAt(end).once("value", )
    }
}