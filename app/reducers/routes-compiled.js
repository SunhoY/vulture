Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=





reducer;var _reactNativeRouterFlux=require('react-native-router-flux');var initialState={scene:{}};function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
switch(action.type){
case _reactNativeRouterFlux.ActionConst.FOCUS:
var nextState=_extends({},
state,{
scene:action.scene});

return nextState;

default:
return state;}

}

//# sourceMappingURL=routes-compiled.js.map