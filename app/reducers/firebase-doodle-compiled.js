Object.defineProperty(exports,"__esModule",{value:true});exports.default=









firebaseDoodle;var _firebase=require('firebase');var firebase=_interopRequireWildcard(_firebase);var _FirebaseConfig=require('../config/FirebaseConfig');var _doodle=require('../actions/doodle');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var doodleReference=firebase.initializeApp(_FirebaseConfig.FIREBASE_CONFIG).database().ref("doodles");var initialState={doodles:[]};function firebaseDoodle(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _doodle.FETCH_DOODLE_LIST:var
start=action.start,end=action.end;

doodleReference.orderByChild("createdAt").startAt(start).endAt(end).once("value");}

}

//# sourceMappingURL=firebase-doodle-compiled.js.map