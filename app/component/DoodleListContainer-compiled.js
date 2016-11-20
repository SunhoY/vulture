Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _DoodleList=require('./DoodleList');var _DoodleList2=_interopRequireDefault(_DoodleList);
var _FirebaseDatabase=require('../firebase/FirebaseDatabase');var _FirebaseDatabase2=_interopRequireDefault(_FirebaseDatabase);
var _reactRedux=require('react-redux');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

DoodleListContainer=function(_Component){_inherits(DoodleListContainer,_Component);
function DoodleListContainer(props,context){_classCallCheck(this,DoodleListContainer);var _this=_possibleConstructorReturn(this,(DoodleListContainer.__proto__||Object.getPrototypeOf(DoodleListContainer)).call(this,
props,context));

_this.state={
dataSource:new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}})};return _this;

}_createClass(DoodleListContainer,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
console.log(this.props);var _props=
this.props,start=_props.start,end=_props.end,dispatch=_props.dispatch;
dispatch({type:"temp"});

var doodleReference=_FirebaseDatabase2.default.getReference("doodles");
doodleReference.orderByChild("createdAt").startAt(start).endAt(end).on("value",function(snapShot){
var doodles=[];
snapShot.forEach(function(child){
var doodle=child.val();
doodles.push({
content:doodle.content,
createdAt:doodle.createdAt,
imageUrl:doodle.imageUrl||doodle.imageUrl===""?{uri:doodle.imageUrl}:require("../../images/act_logo.png"),
title:doodle.title,
url:doodle.url||null});

});

console.log(doodles);

_this2.setState({
dataSource:_this2.state.dataSource.cloneWithRows(doodles.reverse())});

});
}},{key:'render',value:function render()

{
console.log(this.props);
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_DoodleList2.default,{doodles:this.state.dataSource})));


}}]);return DoodleListContainer;}(_react.Component);


function select(_ref){var routes=_ref.routes,someReducer=_ref.someReducer;
return{routes:routes,someReducer:someReducer};
}exports.default=

(0,_reactRedux.connect)(select)(DoodleListContainer);

//# sourceMappingURL=DoodleListContainer-compiled.js.map