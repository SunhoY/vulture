Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeRouterFlux=require('react-native-router-flux');
var _reactNative=require('react-native');



var _SplashView=require('./app/component/SplashView.js');var _SplashView2=_interopRequireDefault(_SplashView);
var _DoodlePagerView=require('./app/component/DoodlePagerView.android.js');var _DoodlePagerView2=_interopRequireDefault(_DoodlePagerView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance, Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Vulture=function(_Component){_inherits(Vulture,_Component);function Vulture(){_classCallCheck(this,Vulture);return _possibleConstructorReturn(this,(Vulture.__proto__||Object.getPrototypeOf(Vulture)).apply(this,arguments));}_createClass(Vulture,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNativeRouterFlux.Router,null,
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'root'},

_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'doodlePagerView',component:_DoodlePagerView2.default,title:'Doodle Now',hideNavBar:true}))));



}}]);return Vulture;}(_react.Component);exports.default=Vulture;


_reactNative.AppRegistry.registerComponent('vulture',function(){return Vulture;});

//# sourceMappingURL=index.android-compiled.js.map