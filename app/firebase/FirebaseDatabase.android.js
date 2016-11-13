import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config/FirebaseConfig.android';

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

export default class FirebaseDatabase {
    static getReference(referenceName) {
        return firebaseApp.database().ref(referenceName);
    }
}