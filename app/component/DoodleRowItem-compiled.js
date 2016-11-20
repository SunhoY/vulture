Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


DoodleRowItem=function(_Component){_inherits(DoodleRowItem,_Component);function DoodleRowItem(){_classCallCheck(this,DoodleRowItem);return _possibleConstructorReturn(this,(DoodleRowItem.__proto__||Object.getPrototypeOf(DoodleRowItem)).apply(this,arguments));}_createClass(DoodleRowItem,[{key:'render',value:function render()
{var
item=this.props.item;

return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){_reactNativeRouterFlux.Actions.doodleView({url:item.url});}},
_react2.default.createElement(_reactNative.View,{style:styles.rowContainer},
_react2.default.createElement(_reactNative.Text,{style:styles.timeElapsed},item.timeElapsed),
_react2.default.createElement(_reactNative.Text,{numberOfLines:1,style:styles.title},item.title),
_react2.default.createElement(_reactNative.Text,{style:styles.content},item.content),
_react2.default.createElement(_reactNative.Image,{style:styles.doodleImage,
source:item.imageUrl}))));




}}]);return DoodleRowItem;}(_react.Component);exports.default=DoodleRowItem;


DoodleRowItem.PropTypes={
item:_react.PropTypes.shape({
title:_react.PropTypes.string.isRequired,
content:_react.PropTypes.string,
imageUrl:_react.PropTypes.object.isRequired,
timeElapsed:_react.PropTypes.string.isRequired})};



var styles=_reactNative.StyleSheet.create({
rowContainer:{
paddingTop:14,
paddingBottom:16,
paddingLeft:17,
paddingRight:17,
height:192},

timeElapsed:{
marginTop:14,
fontSize:14,
color:"#999999"},

title:{
fontSize:16,
marginTop:14,
color:"#555555",
fontWeight:"bold"},

content:{
fontSize:14,
marginTop:8,
width:200,
height:100,
color:"#555555"},

doodleImage:{
width:104,
height:104,
position:'absolute',
top:90,
left:232}});

//# sourceMappingURL=DoodleRowItem-compiled.js.map