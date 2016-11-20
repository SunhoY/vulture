Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _DoodleRowItem=require('./DoodleRowItem');var _DoodleRowItem2=_interopRequireDefault(_DoodleRowItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

DoodleList=function(_Component){_inherits(DoodleList,_Component);
function DoodleList(props){_classCallCheck(this,DoodleList);var _this=_possibleConstructorReturn(this,(DoodleList.__proto__||Object.getPrototypeOf(DoodleList)).call(this,
props));

_this._renderItem=_this._renderItem.bind(_this);return _this;
}_createClass(DoodleList,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.ListView,{dataSource:this.props.doodles,
renderRow:this._renderItem}));

}},{key:'_renderItem',value:function _renderItem(

item){
return(
_react2.default.createElement(_DoodleRowItem2.default,{item:item}));

}}]);return DoodleList;}(_react.Component);exports.default=DoodleList;

//# sourceMappingURL=DoodleList-compiled.js.map