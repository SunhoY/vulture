Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=someReducer;function someReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
console.log(action,state);

switch(action.type){
case"temp":
var assign=_extends({},state,{
testState:1});

console.log(assign);
return assign;

default:
return state;}

}

//# sourceMappingURL=some-reducer-compiled.js.map