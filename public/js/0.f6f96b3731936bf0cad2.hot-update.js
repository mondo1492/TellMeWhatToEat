webpackHotUpdate(0,{

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(59);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _auto_complete_search = __webpack_require__(318);\n\nvar _auto_complete_search2 = _interopRequireDefault(_auto_complete_search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Map: {\n    displayName: 'Map'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/Map.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/Map.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Map = _wrapComponent('Map')(function (_get__$Component) {\n  _inherits(Map, _get__$Component);\n\n  function Map(props) {\n    _classCallCheck(this, Map);\n\n    // the state will need to take in a list of latlngs from home/restaurants\n    // actually, it would be better if you passed in the restaurant itself,\n    // which was an object with a title & pos\n    // maybe have places[0] == home\n    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));\n\n    _this.map = _this.refs.map;\n    return _this;\n  }\n\n  _createClass(Map, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyD6-r_EUcFhCN7xCfTh7PcTENVVE-6uxIs&libraries=places')\n      this.state = {\n        places: [{ latLng: new google.maps.LatLng(37.7758, -122.435), title: \"meow\" }]\n      };\n      var options = {\n        // disableDefaultUI: true,\n        // draggable: false,\n        // gestureHandling: 'none',\n        // scrollwheel: false,\n        // disableDoubleClickZoom: true\n      };\n\n      var map = document.getElementById(\"map\");\n      this.map = new google.maps.Map(map, options);\n\n      this.bounds = new google.maps.LatLngBounds();\n      this.state.places.forEach(function (place) {\n        new google.maps.Marker({\n          position: place.latLng,\n          map: _this2.map,\n          title: place.title\n        });\n        _this2.bounds.extend(place.latLng);\n      });\n      this.map.fitBounds(this.bounds);\n      this.map.panToBounds(this.bounds);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _AutoSearch_Component = _get__('AutoSearch');\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(_AutoSearch_Component, { displayMap: this.map })\n      );\n    }\n  }]);\n\n  return Map;\n}(_get__('React').Component));\n\nexports.default = _get__('Map');\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'AutoSearch':\n      return _auto_complete_search2.default;\n\n    case 'React':\n      return _react3.default;\n\n    case 'Map':\n      return Map;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof Map === 'undefined' ? 'undefined' : _typeof(Map);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(Map, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Map)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xhbmRpbmdfcGFnZS9NYXAuanM/Y2RmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXV0b1NlYXJjaCBmcm9tICcuL2F1dG9fY29tcGxldGVfc2VhcmNoJztcblxuY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyB0aGUgc3RhdGUgd2lsbCBuZWVkIHRvIHRha2UgaW4gYSBsaXN0IG9mIGxhdGxuZ3MgZnJvbSBob21lL3Jlc3RhdXJhbnRzXG4gICAgLy8gYWN0dWFsbHksIGl0IHdvdWxkIGJlIGJldHRlciBpZiB5b3UgcGFzc2VkIGluIHRoZSByZXN0YXVyYW50IGl0c2VsZixcbiAgICAvLyB3aGljaCB3YXMgYW4gb2JqZWN0IHdpdGggYSB0aXRsZSAmIHBvc1xuICAgIC8vIG1heWJlIGhhdmUgcGxhY2VzWzBdID09IGhvbWVcbiAgICB0aGlzLm1hcCA9IHRoaXMucmVmcy5tYXA7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBsb2FkSlMoJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5RDYtcl9FVWNGaENON3hDZlRoN1BjVEVOVlZFLTZ1eElzJmxpYnJhcmllcz1wbGFjZXMnKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGFjZXM6IFt7bGF0TG5nOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc3NTgsIC0xMjIuNDM1KSwgdGl0bGU6IFwibWVvd1wifV1cbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAvLyBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgLy8gZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIC8vIGdlc3R1cmVIYW5kbGluZzogJ25vbmUnLFxuICAgICAgLy8gc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgLy8gZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKTtcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwLCBvcHRpb25zKTtcblxuICAgIHRoaXMuYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgIHRoaXMuc3RhdGUucGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBwbGFjZS5sYXRMbmcsXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgIHRpdGxlOiBwbGFjZS50aXRsZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmJvdW5kcy5leHRlbmQocGxhY2UubGF0TG5nKVxuICAgIH0pO1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgdGhpcy5tYXAucGFuVG9Cb3VuZHModGhpcy5ib3VuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBdXRvU2VhcmNoIGRpc3BsYXlNYXA9e3RoaXMubWFwfSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9MYW5kaW5nX3BhZ2UvTWFwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBTUE7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBL0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})