'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







vulture=function(_Component){_inherits(vulture,_Component);function vulture(){_classCallCheck(this,vulture);return _possibleConstructorReturn(this,(vulture.__proto__||Object.getPrototypeOf(vulture)).apply(this,arguments));}_createClass(vulture,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.title},'Doodle Now'),
_react2.default.createElement(_reactNative.Text,{style:styles.secondaryTitle},'for Stand Up'),
_react2.default.createElement(_reactNative.Image,{style:styles.mainImage,source:require('./images/act_logo.png')})));


}}]);return vulture;}(_react.Component);exports.default=vulture;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f6f6f6',
alignItems:"center",
alignSelf:"stretch"},

title:{
alignSelf:'center',
textAlign:"center",
fontSize:30,
opacity:.6,
marginTop:142},

secondaryTitle:{
opacity:.5,
fontSize:20,
marginTop:5},

mainImage:{
marginTop:61,
width:143,
height:143}});



_reactNative.AppRegistry.registerComponent('vulture',function(){return vulture;});

//# sourceMappingURL=index.android-compiled.js.map