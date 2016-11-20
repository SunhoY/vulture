Object.defineProperty(exports,"__esModule",{value:true});exports.


fetchDoodleList=fetchDoodleList;exports.



addDoodle=addDoodle;var FETCH_DOODLE_LIST=exports.FETCH_DOODLE_LIST='FETCH_DOODLE_LIST';var ADD_DOODLE=exports.ADD_DOODLE='ADD_DOODLE';function fetchDoodleList(period){return{type:FETCH_DOODLE_LIST,period:period};}function addDoodle(doodle){
return{type:ADD_DOODLE,doodle:doodle};
}

//# sourceMappingURL=doodle-compiled.js.map