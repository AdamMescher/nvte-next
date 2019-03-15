webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SimpleSlider/index.jsx":
/*!*******************************************!*\
  !*** ./components/SimpleSlider/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/SimpleSlider/styled.js");
/* harmony import */ var _lib_generateTestimonialList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/generateTestimonialList */ "./lib/generateTestimonialList.js");
/* harmony import */ var _lib_testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/testimonials */ "./lib/testimonials.js");
var _jsxFileName = "/Users/adam/dev/nvte-next/components/SimpleSlider/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SimpleSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleSlider, _Component);

  function SimpleSlider() {
    _classCallCheck(this, SimpleSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleSlider).apply(this, arguments));
  }

  _createClass(SimpleSlider, [{
    key: "render",
    value: function render() {
      var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), Object(_lib_generateTestimonialList__WEBPACK_IMPORTED_MODULE_3__["default"])(_lib_testimonials__WEBPACK_IMPORTED_MODULE_4__["default"])));
    }
  }]);

  return SimpleSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SimpleSlider);

/***/ }),

/***/ "./lib/testimonials.js":
/*!*****************************!*\
  !*** ./lib/testimonials.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var testimonials = [{
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-one.jpg',
  imgAlt: 'headshot or logo alt text',
  text: "Hundreds of thousands star stuff harvesting star light dream of the mind's eye Tunguska event astonishment gathered by gravity. At the edge of forever the carbon in our apple pies a mote of dust suspended in a sunbeam two ghostly white figures in coveralls and helmets are soflty dancing made in the interiors of collapsing stars a mote of dust suspended in a sunbeam.",
  name: 'Carl Sagan'
}, {
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-two.jpg',
  imgAlt: 'headshot or logo alt text',
  text: 'I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring.',
  name: 'Batman'
}, {
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-three.jpg',
  imgAlt: 'headshot or logo alt text',
  text: "Some posit the gated giant to be less than learned. However, buggy scissors show us how wounds can be lunchrooms. This is not to discredit the idea that the first sthenic laundry is, in its own way, a stopsign. The soda of a dragon becomes a pan chicken.",
  name: 'Some Pretentious Artist'
}, {
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-four.jpg',
  imgAlt: 'headshot or logo alt text',
  text: "You tell me where we start, where we're going, where we're going afterwards. I give you five minutes when we get there. For example, the sun goes up and then it goes down. I won't eat my cereal. I could be fun, if you want.",
  name: 'Ryan Gosling'
}, {
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-five.jpg',
  imgAlt: 'headshot or logo alt text',
  text: "The key is to drink coconut, fresh coconut, trust me. They will try to close the door on you, just open it. Find peace, life is like a water fall, you\u2019ve gotta flow. Look at the sunset, life is amazing, life is beautiful, life is what you make it.",
  name: 'DJ Khalid'
}, {
  imgUrl: '../static/assets/images/testimonials/headshots/headshot-six.jpg',
  imgAlt: 'headshot or logo alt text',
  text: "\u201CYes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.\u201D",
  name: 'Oscar Wilde'
}];
/* harmony default export */ __webpack_exports__["default"] = (testimonials);

/***/ })

})
//# sourceMappingURL=index.js.51d23b5a8ee5efb4871e.hot-update.js.map