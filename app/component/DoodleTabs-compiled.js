Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeScrollableTabView=require('react-native-scrollable-tab-view');var _reactNativeScrollableTabView2=_interopRequireDefault(_reactNativeScrollableTabView);
var _DoodleListContainer=require('./DoodleListContainer');var _DoodleListContainer2=_interopRequireDefault(_DoodleListContainer);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

DoodleTabs=function(_Component){_inherits(DoodleTabs,_Component);function DoodleTabs(){_classCallCheck(this,DoodleTabs);return _possibleConstructorReturn(this,(DoodleTabs.__proto__||Object.getPrototypeOf(DoodleTabs)).apply(this,arguments));}_createClass(DoodleTabs,[{key:'render',value:function render()
{
var end=(0,_moment2.default)().valueOf();
var archiveStart=(0,_moment2.default)().subtract(7,'days').valueOf();
var todayStart=(0,_moment2.default)().subtract(1,'days').valueOf();

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.actionBar},'Doodle Now'),
_react2.default.createElement(_reactNativeScrollableTabView2.default,{tabBarUnderlineStyle:styles.tabBarUnderlineStyle,tabBarTextStyle:styles.tabBarTextStyle},
_react2.default.createElement(_DoodleListContainer2.default,{tabLabel:'Today',start:todayStart,end:end}),
_react2.default.createElement(_DoodleListContainer2.default,{tabLabel:'Archive',start:archiveStart,end:end})),

_react2.default.createElement(_reactNative.Image,{source:require("../../images/create_doodle.png"),style:styles.floatingButton})));


}}]);return DoodleTabs;}(_react.Component);exports.default=DoodleTabs;


var styles={
container:{
flex:1},

actionBar:{
height:56,
paddingLeft:15,
paddingTop:18,
color:"#5bc0be",
fontSize:20},

tabBarUnderlineStyle:{
backgroundColor:"#5bc0be"},

tabBarTextStyle:{
fontSize:15,
color:"#93a8ac"},

floatingButton:{
position:"absolute",
bottom:35,
right:35,
width:56,
height:56}};

//# sourceMappingURL=DoodleTabs-compiled.js.map