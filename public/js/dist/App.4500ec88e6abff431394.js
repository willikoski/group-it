/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_AuthPage_Authpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/AuthPage/Authpage */ "./src/pages/AuthPage/Authpage.js");
/* harmony import */ var _pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./src/pages/ForgotPassword/ForgotPassword.js");
/* harmony import */ var _components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ResetPassword/ResetPassword */ "./src/components/ResetPassword/ResetPassword.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/api-service */ "./src/utilities/api-service.js");
/* harmony import */ var _pages_NotFound_NotFound_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/NotFound/NotFound.js */ "./src/pages/NotFound/NotFound.js");









function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const handleLogout = () => {
    _utilities_api_service__WEBPACK_IMPORTED_MODULE_8__.logOut();
    setUser(null); // Update user state
    navigate('/auth'); // Redirect to login page
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/auth",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AuthPage_Authpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/auth/forgot-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/auth/reset-password/:token",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/profile/:userId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      setUser: setUser,
      onLogout: handleLogout
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NotFound_NotFound_js__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  })));
}

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/LoginForm/LoginForm.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


 // Adjust the import path as per your file structure


function LoginForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [rememberMe, setRememberMe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [name]: value
    }));
    setError('');
    setErrors(prevErrors => _objectSpread(_objectSpread({}, prevErrors), {}, {
      [name]: ''
    }));
    const inputContainer = evt.target.parentElement;
    if (value.trim()) {
      inputContainer.classList.add(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    } else {
      inputContainer.classList.remove(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    }
  };
  const handleRememberMeChange = evt => {
    const isChecked = evt.target.checked;
    setRememberMe(isChecked);
    console.log('Remember Me checked:', isChecked); // Log the value to confirm
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    const emailError = validateEmail(credentials.email);
    const passwordError = validatePassword(credentials.password);
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      });
      setError('Please fix the errors in the form.');
      return;
    }
    console.log('Remember Me value on submit:', rememberMe); // Log the rememberMe value

    try {
      const user = await _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.login(credentials, rememberMe);
      setUser(user); // Assuming `user` object contains necessary user data
      navigate("/profile/".concat(user._id)); // Redirect to the home page or dashboard
    } catch (error) {
      setError('Log In Failed - Try Again');
    }
  };
  const validateEmail = email => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };
  const validatePassword = password => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : '';
  };
  const handleForgotPasswordClick = () => {
    navigate('/auth/forgot-password');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LoginForm
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/React.createElement("form", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form,
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, /*#__PURE__*/React.createElement("h1", null, "Example Title")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: credentials.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email"), errors.email && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: credentials.password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Password"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: () => setShowPassword(!showPassword)
  }, showPassword ? '🔑' : '🛡️'), errors.password && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.password)), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lost
  }, /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rememberMe,
    onChange: handleRememberMeChange
  }), "Remember Me"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].forgotPassword,
    onClick: handleForgotPasswordClick
  }, "Forgot Password")), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Log In"), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].register
  }, /*#__PURE__*/React.createElement("p", {
    onClick: () => setShowLogin(false)
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].registerLink
  }, "Sign Up"))), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].centerError
  }, /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error)))));
}

/***/ }),

/***/ "./src/components/ResetPassword/ResetPassword.js":
/*!*******************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.module.scss */ "./src/components/ResetPassword/ResetPassword.module.scss");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");



 // Adjust import path as per your file structure

function ResetPassword(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(); // Extract the token parameter from the URL
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Call the updatePasswordWithToken function from apiService
      await _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.updatePasswordWithToken(token, {
        newPassword: password
      });
      setSuccessMessage('Password updated successfully');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to update password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit,
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].resetPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "password"
  }, "New Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "confirm-password"
  }, "Confirm Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "confirm-password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value)
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].backToLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/auth",
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Back to Login")));
}

/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.module.scss */ "./src/components/SignUpForm/SignUpForm.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function SignUpForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
    setError('');
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      [name]: ''
    })); // Clear individual field error
    console.log("".concat(name, " changed to:"), value); // Logging each input change
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      });
      setError('Please fix the errors in the form.');
      return;
    }
    try {
      console.log('Submitting form with data:', formData); // Log form data
      const user = await _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.signUp(formData); // Log the response
      console.log('User signed up:', user);
      setUser(user);
      navigate("/profile/".concat(user._id));
    } catch (err) {
      console.error('Sign Up Failed:', err); // Log the error
      setError('Sign Up Failed - Try Again');
    }
  };
  const validateEmail = email => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };
  const validatePassword = password => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : '';
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log('Password visibility toggled'); // Log password visibility toggling
  };
  const {
    name,
    email,
    password
  } = formData;
  const disable = !name || !email || !password;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Example Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name"), errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorText
  }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email"), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorText
  }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorText
  }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: togglePasswordVisibility
  }, showPassword ? '🔑' : '🛡️')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    type: "submit",
    disabled: disable
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: () => setShowLogin(true),
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loginLink
  }, "Already have an account? Log In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].centerError
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error)))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/AuthPage/Authpage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/Authpage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo
  }), /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].credentialsContainer
  }, showLogin ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })) : /*#__PURE__*/React.createElement(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })));
}

/***/ }),

/***/ "./src/pages/ForgotPasswordForm/ForgotPasswordForm.js":
/*!************************************************************!*\
  !*** ./src/pages/ForgotPasswordForm/ForgotPasswordForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");
/* harmony import */ var _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordForm.module.scss */ "./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss");




function ForgotPasswordForm() {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      await (0,_utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.resetPassword)({
        email
      });
      setSuccessMessage('Password reset successful. Check your email for further instructions.');
      setError('');
      setEmail(''); // Clear email input on success
    } catch (error) {
      setError(error.message || 'Failed to reset password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Forgot Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].link,
    onClick: () => navigate('/auth')
  }, "Back To Login"));
}

/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.js":
/*!****************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ForgotPasswordForm/ForgotPasswordForm */ "./src/pages/ForgotPasswordForm/ForgotPasswordForm.js");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./src/pages/ForgotPassword/ForgotPassword.module.scss");

 // Adjust the import path as needed
 // Adjust the import path as needed

function ForgotPasswordPage(_ref) {
  let {
    setUser
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.module.scss */ "./src/pages/Home/Home.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].projectTitle
  }, "Open Source Login/Signup React Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].projectDescription
  }, "Welcome to my first open source project, designed to help students visualize login/signup functionality more clearly. Special thanks to my classmates for our final project, Goose. Check it out here: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://goose.danwheeler.me",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Goose Final Project"
  }, " Goose"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].projectDescription
  }, "I would like to leave a special thank you to my group mates during General Assembly coding bootcamp:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].classmateList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/zjuan4101",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Juan Zelaya")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/tylerpierson",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Tyler Pierson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/brycesexton/",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Bryce Sexton")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/Kennyi00/",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Isaiah Branstetter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/dwheeler7",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Danny Wheeler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/jalensmith17",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Jalen Smith")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/Jcasanova1990",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Check Their Awesome GitHub"
  }, "Jeremy Casanova")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Project Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].titlep
  }, "This project demonstrates how to implement login/signup functionality in a React application. It is designed to help students understand and visualize these processes clearly. Anyone can use this project as their own to build off.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Authentication (/auth Path)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subsection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Allows existing users to access their accounts. Components include:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Username:"), " Field for the user's username."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Password:"), " Field for the user's password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Remember Me:"), " Checkbox to keep the user logged in using localStorage.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If login is successful, users are redirected to the main page. Failed attempts show an error message."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "Signup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Allows new users to create an account. Components include:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Username:"), " Field for a unique username."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Password:"), " Field for a secure password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Confirm Password:"), " Field to confirm the password.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "After registration, users receive a confirmation message and can log in with their new credentials."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "Nodemailer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Allows email-api.js to send out emails, for password recovery and reset."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Nodemailer package is needed:"), " npm i nodemailer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "GMAIL=GMAILUSERNAME:"), " Gmail username in .env file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "GMAILPASS=APPPASSWORD:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://myaccount.google.com/apppasswords",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-tooltip": "Click here to create an APP password"
  }, "Generated App password in .env file"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If successful emails will be sent automatically on forgot passwords forms and user will be emailed a password reset link with the correct token. Email-api also has the power to make support tickets where the account will be sent an email as well."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Forgot Password and Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subsection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "/forgot-password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "/forgot-password"), " endpoint allows users to request a password reset. When a user submits their email address, the server generates a temporary password and a reset token. This token and password are then sent to the user via email using `nodemailer`. The user can use this temporary password to log in and reset their password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "/reset-password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "/reset-password"), " endpoint is used to update the user's password. After receiving the temporary password and reset token from the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "/forgot-password"), " process, the user provides a new password along with the reset token. The server verifies the token, updates the user's password, and clears the reset token."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, "How it Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The user submits their email to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "/forgot-password"), " endpoint."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The server generates a temporary password and a reset token, hashes the password, and saves it in the database."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The server sends an email to the user containing the temporary password and reset token using `nodemailer`."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The user receives the email, logs in with the temporary password, and uses the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "/reset-password"), " endpoint to set a new password using the provided token."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The server verifies the token, updates the user's password, and clears the reset token."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "App.js Paths"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subsection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth",
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].apiLink
  }, "/auth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The base endpoint for authentication:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth"
  }, "/auth")), ": Authentication page. Signup/Login here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth/forgot-password"
  }, "/auth/forgot-password")), ": Forgot password page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth/reset-password/:token"
  }, "/auth/reset-password")), ": Reset password page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/profile/:userId",
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].apiLink
  }, "/profile/:userId")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/profile/:userId"
  }, "/profile/:userId")), ": User profile page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].h3styler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/*",
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].apiLink
  }, "/NotFound")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/*"
  }, "/NotFound")), ": Custom 404 NotFound Page"))));
}

/***/ }),

/***/ "./src/pages/NotFound/NotFound.js":
/*!****************************************!*\
  !*** ./src/pages/NotFound/NotFound.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.module.scss */ "./src/pages/NotFound/NotFound.module.scss");



const NotFound = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "404 - Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Oops! The page you are looking for does not exist."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/cat.gif",
    alt: "Cat gif",
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundOptions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundLink
  }, "Go to Home Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth",
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundLink
  }, "Login / Signup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth/forgot-password",
    className: _NotFound_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].notFoundLink
  }, "Forgot Password")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");



const ProfilePage = _ref => {
  let {
    user,
    onLogout
  } = _ref;
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/users/".concat(userId));
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setProfileUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [userId]);
  if (!user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loginPrompt
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To view the profile page, please log in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => navigate('/auth')
    }, "Go to Login"));
  }
  if (!profileUser) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].profileContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].profileContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Profile Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Name:"), " ", profileUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Email:"), " ", profileUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "add more stuff here?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logoutButton,
    onClick: onLogout
  }, "Log Out")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./src/utilities/api-service.js":
/*!**************************************!*\
  !*** ./src/utilities/api-service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updatePasswordWithToken: () => (/* binding */ updatePasswordWithToken)
/* harmony export */ });
/* unused harmony exports getUser, getProfileUser, indexUsers */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const BASE_URL = '/api/users';
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getProfileUser(userId) {
  try {
    const foundUser = await _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(userId);
    return foundUser;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
async function indexUsers() {
  console.log('indexing users');
  try {
    const foundUsers = await _users_api__WEBPACK_IMPORTED_MODULE_0__.index();
    return foundUsers;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
function logOut() {
  localStorage.removeItem('token');
}
async function signUp(userData) {
  console.log('Signing up user with data:', userData);
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function login(credentials, rememberMe) {
  try {
    console.log('Logging in with credentials:', credentials);
    const response = await fetch("".concat(BASE_URL, "/login"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread(_objectSpread({}, credentials), {}, {
        rememberMe
      }))
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const {
      user,
      token
    } = await response.json();
    localStorage.setItem('token', token);

    ///// if you want to add a sessionStorage instead of the JWT tokens in the controller page ////
    // if (rememberMe) {
    //   localStorage.setItem('token', token);
    // } else {
    //   sessionStorage.setItem('token', token);
    // }

    return user;
  } catch (error) {
    console.error('Login Error:', error);
    throw new Error('Login failed');
  }
}
async function resetPassword(emailData) {
  try {
    console.log('Resetting password for email:', emailData);
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error('Password Reset Error:', error);
    throw new Error('Failed to reset password.');
  }
}
async function updatePasswordWithToken(token, passwordData) {
  try {
    console.log('Updating password with token:', token, 'and data:', passwordData);
    const response = await fetch("".concat(BASE_URL, "/reset-password/").concat(token), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    });
    if (!response.ok) {
      throw new Error('Failed to update password');
    }
    return true;
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-service */ "./src/utilities/api-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_api_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    // Ensure options.headers is initialized if it doesn't exist
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findUser: () => (/* binding */ findUser),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* unused harmony export login */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
async function login(credentials) {
  console.log('Sending login request with credentials:', credentials);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
async function resetPassword(emailData) {
  console.log('Sending password reset request for email:', emailData);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/reset-password"), 'POST', emailData);
}
async function findUser(userId) {
  console.log('Fetching user with ID:', userId);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(userId));
}
async function index() {
  console.log('Fetching all users');
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes iB4SfQWGw0ZOCqRfypCd {
  0% {
    color: #c3ffb3;
    transform: scale(1);
  }
  50% {
    color: #98fb98;
    transform: scale(1.1);
  }
  100% {
    color: #c3ffb3;
    transform: scale(1);
  }
}
@keyframes XRJ4HljCDLmOJmSxDLVQ {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.aOctDy4BV7cS3A3FgdnO {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.O2NCX3pelTmVHMEJzuh5 {
  width: 100%;
}

h4 {
  font-size: 3rem;
}

/* Inputbox styles */
.slJPwttFXbjZj3iK5tpD {
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  max-width: 40vh;
  border-bottom: 2px solid #fff;
}
.slJPwttFXbjZj3iK5tpD:focus-within {
  border-bottom-color: gold !important; /* Change border color on focus */
}
.slJPwttFXbjZj3iK5tpD .RL0EW6mNmYV3dbwKgeGS {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}
.slJPwttFXbjZj3iK5tpD input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: bolder;
  padding: 0 35px 0 5px;
  color: #fff;
}
.slJPwttFXbjZj3iK5tpD input:focus ~ label, .slJPwttFXbjZj3iK5tpD input:valid ~ label {
  color: lightgray;
  top: -5px;
}

/* Rest of the styles */
.mdJKUsO6IVB_KHxsorxg {
  min-width: 30vh;
  max-width: 50vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  animation: XRJ4HljCDLmOJmSxDLVQ 5s infinite linear;
}
.mdJKUsO6IVB_KHxsorxg .duhWcPoiFKzflZYTW6qA {
  width: 100%;
  color: #fff;
  padding: 10px;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}
.mdJKUsO6IVB_KHxsorxg h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
}
.mdJKUsO6IVB_KHxsorxg .PWpsrepqIxsSicJWBQv9 {
  display: block;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL {
  margin: 35px 2px;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label {
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin-right: 1rem;
  margin-left: -1.25rem;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label:has(input:checked) {
  color: darkgreen;
  font-weight: bolder;
  animation: iB4SfQWGw0ZOCqRfypCd 0.5s ease forwards;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label input {
  margin-right: 5px;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4 {
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
  color: #ccc;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i {
  font-size: 0.9rem;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i:hover {
  text-decoration: underline;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4 {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
}
.mdJKUsO6IVB_KHxsorxg button {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.mdJKUsO6IVB_KHxsorxg button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.mdJKUsO6IVB_KHxsorxg .ZUKc8FFOJWWao8EDdobQ {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.ZOUgweqKwC8FSqNiDKzB {
  text-align: center;
  font-weight: bolder;
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,cAAA;IACA,mBAAA;EACF;EACA;IACE,cAAA;IACA,qBAAA;EACF;EACA;IACE,cAAA;IACA,mBAAA;EACF;AACF;AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,WAAA;AALF;;AAQA;EACE,eAAA;AALF;;AAQA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AALF;AAME;EACE,oCAAA,EAAA,iCAAA;AAJJ;AAOE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;AALJ;AAQE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AANJ;AAQI;EAEE,gBAAA;EACA,SAAA;AAPN;;AAYA,uBAAA;AAEA;EACE,eAAA;EACA,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAVF;AAYE;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AAVJ;AAaE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;AAeE;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAbJ;AAeI;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,kBAAA;EACA,qBAAA;AAbN;AAeM;EACE,gBAAA;EACA,mBAAA;EACA,kDAAA;AAbR;AAiBM;EACE,iBAAA;EACA,eAAA;AAfR;AAqBI;EACE,eAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,2BAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAnBd;AAoBM;EACE,0BAAA;EACA,WAAA;EACA,eAAA;AAlBR;AAwBE;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAtBJ;AAwBI;EACE,0BAAA;EACA,eAAA;AAtBN;AA0BM;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAxBR;AA0BQ;EACE,0BAAA;AAxBV;AA8BE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA5BZ;AA6BI;EACE,0CAAA;AA3BN;AA+BE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA7BZ;;AAiCA;EACE,kBAAA;EACA,mBAAA;AA9BF","sourcesContent":["@keyframes labelCheckedAnimation {\r\n  0% {\r\n    color: #c3ffb3; \r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    color: #98fb98; \r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    color: #c3ffb3;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.LoginForm {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n}\r\n\r\nh4 {\r\n  font-size: 3rem;\r\n}\r\n\r\n/* Inputbox styles */\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  max-width: 40vh;\r\n  border-bottom: 2px solid #fff;\r\n  &:focus-within {\r\n    border-bottom-color: gold !important; /* Change border color on focus */\r\n  }\r\n\r\n  .label {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    transform: translateY(-40%);\r\n    color: #fff;\r\n    font-size: 1.25rem;\r\n    pointer-events: none;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  input {\r\n    width: 100%;\r\n    height: 60px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bolder;\r\n    padding: 0 35px 0 5px;\r\n    color: #fff;\r\n\r\n    &:focus ~ label,\r\n    &:valid ~ label {\r\n      color: lightgray;\r\n      top: -5px;\r\n    }\r\n  }\r\n}\r\n\r\n/* Rest of the styles */\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 50vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  overflow: hidden;\r\n  animation: shine 5s infinite linear;\r\n\r\n  .title {\r\n    width: 100%;\r\n    color: #fff;\r\n    padding: 10px;\r\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 3rem;\r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .errorSign {\r\n    display: block;\r\n  }\r\n\r\n  .lost {\r\n    margin: 35px 2px;\r\n    font-size: 0.85rem;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n\r\n    label {\r\n      font-size: 1rem;\r\n      display: flex;\r\n      align-items: center;\r\n      padding: .1rem;\r\n      cursor: pointer;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      margin-right: 1rem;\r\n      margin-left: -1.25rem;\r\n      \r\n      &:has(input:checked) {\r\n        color: darkgreen;\r\n        font-weight: bolder;\r\n        animation: labelCheckedAnimation 0.5s ease forwards;\r\n      }\r\n\r\n\r\n      input {\r\n        margin-right: 5px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      \r\n    }\r\n\r\n    .forgotPassword {\r\n      font-size: 1rem;\r\n      color: #fff;\r\n      text-decoration: none;\r\n      font-weight: 600;\r\n      transition: color 0.3s ease;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      &:hover {\r\n        text-decoration: underline;\r\n        color: #ccc;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  \r\n  .register {\r\n    font-size: 0.9rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin: 25px 0 10px;\r\n\r\n    &:hover {\r\n      text-decoration: underline;\r\n      cursor: pointer;\r\n    }\r\n\r\n    p {\r\n      .forgotPassword {\r\n        text-decoration: none;\r\n        color: #fff;\r\n        font-weight: 600;\r\n\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  button {\r\n    color: white;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n    background-color: rgb(87, 163, 115);\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    transition: all 0.4s ease;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    &:hover {\r\n      background-color: rgba(255, 255, 255, 0.5);\r\n    }\r\n  }\r\n\r\n  .showPasswordIcon {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    font-size: 1.5rem;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    color: #ccc;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n  }\r\n}\r\n\r\n.centerError {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `aOctDy4BV7cS3A3FgdnO`,
	"form": `O2NCX3pelTmVHMEJzuh5`,
	"inputbox": `slJPwttFXbjZj3iK5tpD`,
	"label": `RL0EW6mNmYV3dbwKgeGS`,
	"boxc": `mdJKUsO6IVB_KHxsorxg`,
	"shine": `XRJ4HljCDLmOJmSxDLVQ`,
	"title": `duhWcPoiFKzflZYTW6qA`,
	"errorSign": `PWpsrepqIxsSicJWBQv9`,
	"lost": `JAm91a8tmBcEN_9D7mVL`,
	"labelCheckedAnimation": `iB4SfQWGw0ZOCqRfypCd`,
	"forgotPassword": `j6uBnf0W_ruy9sK_SIO4`,
	"register": `YtX40q4kPgyY1kLWHR5i`,
	"showPasswordIcon": `ZUKc8FFOJWWao8EDdobQ`,
	"centerError": `ZOUgweqKwC8FSqNiDKzB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes WBWlcBCjwwKL4hZmRqIS {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.YgECdOP6ynMaHqn_K8cT {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom right, #7bbd86, #1f644b);
  border: 1px solid black;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  animation: WBWlcBCjwwKL4hZmRqIS 5s infinite linear;
}
.YgECdOP6ynMaHqn_K8cT h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG {
  margin-bottom: 20px;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG label {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease;
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input:focus {
  border-bottom-color: gold;
}
.YgECdOP6ynMaHqn_K8cT .x8jPB_4eVclrHccPXSI_ {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.YgECdOP6ynMaHqn_K8cT .MVTgnJEz0qLPUgZcJaVM {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 0.5rem;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ResetPassword/ResetPassword.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,8DAAA;EACA,uBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;AAXN;AAaM;EACE,0CAAA;AAXR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: linear-gradient(to bottom right, #7bbd86, #1f644b);\r\n    border: 1px solid black;\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    border: 2px solid rgba(255, 255, 255, 0.5);\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    h1 {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n      }\r\n  \r\n      input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; \r\n        width: 30vh;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      input:focus {\r\n        border-bottom-color: gold;\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1rem;\r\n      margin-top: 5px;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: .5rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `YgECdOP6ynMaHqn_K8cT`,
	"shine": `WBWlcBCjwwKL4hZmRqIS`,
	"formGroup": `SpwWq6spR4t_4XdWlyRG`,
	"error": `x8jPB_4eVclrHccPXSI_`,
	"success": `MVTgnJEz0qLPUgZcJaVM`,
	"button": `fxZR2_j5SbykUaJYKkyH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes KiN27HiRvEoQXCiZZer1 {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
/* Body styles */
.xCrr_Bbs2iSq5QC2RUqr {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.O3kJQXyeVBVPoVbc0TQA {
  min-width: 30vh;
  max-width: 43.3vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  animation: KiN27HiRvEoQXCiZZer1 5s infinite linear;
}
.O3kJQXyeVBVPoVbc0TQA h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
  padding-top: 0.64rem;
}

.G5WQETTTkTlRpPef5KUY {
  position: relative;
  margin: 30px 0;
  border-bottom: 2px solid #fff;
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  width: 30vh;
  border-bottom: 2px solid #fff;
}
.G5WQETTTkTlRpPef5KUY:focus-within {
  border-bottom-color: gold !important;
}

.G5WQETTTkTlRpPef5KUY label {
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 80px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY select option {
  font-size: 1.25rem;
  background-color: #081C15;
  border-radius: 2px;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY input:focus ~ label,
.G5WQETTTkTlRpPef5KUY input:valid ~ label {
  color: lightgray;
  top: -5px;
}

.G5WQETTTkTlRpPef5KUY input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
  font-weight: bolder;
  padding: 0;
}

.emIz9U5VSVFVmZPhEvKw {
  margin-top: 20px;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: center;
}

.emIz9U5VSVFVmZPhEvKw p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.emIz9U5VSVFVmZPhEvKw p:hover {
  text-decoration: underline;
  cursor: pointer;
}

.xyMV8WMo_VF047TUcQck {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
}

.xyMV8WMo_VF047TUcQck:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
}

select:hover {
  cursor: pointer;
}

option {
  color: black;
}

.JtQI_Hm4R0_7b5aQ1Jdw {
  font-size: 1.25rem;
  color: #fff;
  text-align: center;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a:hover {
  text-decoration: underline;
}

.XEq2Dm2tfurQtGWxCT44 {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
}

.JjtLxBToFi_NDGVU_Prn {
  text-align: center;
  font-weight: bolder;
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA,gBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kDAAA;AALF;AAOE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,8CAAA;EACA,oBAAA;AALJ;;AASA;EACE,kBAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,6BAAA;AANF;AAQE;EACE,oCAAA;AANJ;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAPV;;AAUA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;EACE,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;;EAEE,gBAAA;EACA,SAAA;AAPJ;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AAPF;;AAUA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAPF;;AAUA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAPF;;AAUA;EACI,0BAAA;EACA,eAAA;AAPJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,0CAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAPF;;AAUA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAPF;;AAUA;EACE,0BAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AAPF;;AAUA;EACE,kBAAA;EACA,mBAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n/* Body styles */\r\n.body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 43.3vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  overflow: hidden; \r\n  animation: shine 5s infinite linear;\r\n\r\n  h1 {\r\n    font-size: 3rem; \r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\r\n    padding-top: .64rem;\r\n  }\r\n}\r\n\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  border-bottom: 2px solid #fff;\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  width: 30vh;\r\n  border-bottom: 2px solid #fff;\r\n  \r\n  &:focus-within {\r\n    border-bottom-color: gold !important; \r\n  }\r\n}\r\n\r\n.inputbox label {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 2px;\r\n  transform: translateY(-40%);\r\n  color: #fff;\r\n  font-size: 1.25rem; \r\n  pointer-events: none;\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.inputbox select {\r\n    width: 100%;\r\n    height: 80px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    color: #fff;\r\n  }\r\n  \r\n  .inputbox select option {\r\n    font-size: 1.25rem;\r\n    background-color: #081C15; \r\n    border-radius: 2px;\r\n    color: #fff; \r\n  }\r\n\r\n  .inputbox input:focus ~ label,\r\n  .inputbox input:valid ~ label {\r\n    color: lightgray;\r\n    top: -5px;\r\n  }\r\n  \r\n.inputbox input {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 0;\r\n}\r\n\r\n.login {\r\n  margin-top: 20px; \r\n  font-size: 0.85rem;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.login p a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.login p:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  width: 100%;\r\n  height: 40px;\r\n  border-radius: 40px;\r\n  background-color: rgb(87, 163, 115);\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n.button:hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.inputbox select {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n}\r\n\r\nselect:hover {\r\n  cursor: pointer;\r\n}\r\n\r\noption {\r\n  color: black;\r\n}\r\n\r\n.register {\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.register p a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.register p a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.showPasswordIcon {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50%;\r\n  font-size: 1.5rem;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n  color: #ccc;\r\n}\r\n\r\n.centerError {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"body": `xCrr_Bbs2iSq5QC2RUqr`,
	"boxc": `O3kJQXyeVBVPoVbc0TQA`,
	"shine": `KiN27HiRvEoQXCiZZer1`,
	"inputbox": `G5WQETTTkTlRpPef5KUY`,
	"login": `emIz9U5VSVFVmZPhEvKw`,
	"button": `xyMV8WMo_VF047TUcQck`,
	"register": `JtQI_Hm4R0_7b5aQ1Jdw`,
	"showPasswordIcon": `XEq2Dm2tfurQtGWxCT44`,
	"centerError": `JjtLxBToFi_NDGVU_Prn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --heading-color: rgb(78, 91, 49);
  --bg-color: rgb(244, 246, 240);
  --btn-animation: rgba(219, 171, 171, 0.3);
  --input-color: rgb(87, 8, 8);
  --nav-border: rgba(219, 171, 171, 0.3);
  --text-red: rgb(237, 100, 100);
  --text-green: rgb(51, 86, 51);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter Tight", Verdana, Tahoma, sans-serif;
}

body {
  background-color: var(--bg-color);
}

input:-webkit-autofill {
  -webkit-transition: background-color 0s 99999s;
  transition: background-color 0s 99999s;
}

input:-webkit-autofill:focus {
  background-color: inherit !important;
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAEA;EACI,gCAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,sCAAA;EACA,8BAAA;EACA,6BAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,uDAAA;AACJ;;AAEA;EACI,iCAAA;AACJ;;AAEA;EACI,8CAAA;EACA,sCAAA;AACJ;;AAEE;EACE,oCAAA;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\r\n:root {\r\n    --heading-color: rgb(78, 91, 49);\r\n    --bg-color: rgb(244, 246, 240);\r\n    --btn-animation: rgba(219, 171, 171, 0.3);\r\n    --input-color: rgb(87, 8, 8);\r\n    --nav-border: rgba(219, 171, 171, 0.3);\r\n    --text-red: rgb(237, 100, 100);\r\n    --text-green: rgb(51, 86, 51);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Inter Tight\", Verdana, Tahoma, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: var(--bg-color);\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-transition: background-color 0s 99999s;\r\n    transition: background-color 0s 99999s;\r\n  }\r\n  \r\n  input:-webkit-autofill:focus {\r\n    background-color: inherit !important;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes prKnyBj4DpKUJjJe4Scn {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
body {
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
}

.hgiHKYRg5KiqKL7JPxbo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  background: linear-gradient(to bottom right, #7bbd86, #1f644b);
  border: 1px solid black;
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  animation: prKnyBj4DpKUJjJe4Scn 5s infinite linear;
}
.hgiHKYRg5KiqKL7JPxbo .ShCoqsJ6huUro8JPv_45 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.hgiHKYRg5KiqKL7JPxbo .giAvVrxlj6RA_T11xv2w {
  margin-bottom: 20px;
}
.hgiHKYRg5KiqKL7JPxbo .giAvVrxlj6RA_T11xv2w .v1zUp4Yz443dMUXOoLZ9 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
  margin-right: 0.5rem;
}
.hgiHKYRg5KiqKL7JPxbo .giAvVrxlj6RA_T11xv2w .WSmKYTbPR1axz8UNKxJM {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 100%;
  font-weight: bolder;
  padding: 0;
}
.hgiHKYRg5KiqKL7JPxbo .giAvVrxlj6RA_T11xv2w .WSmKYTbPR1axz8UNKxJM:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.hgiHKYRg5KiqKL7JPxbo .dsn48Ypy3zIM9L9ONXzQ {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.hgiHKYRg5KiqKL7JPxbo .Ro4VRYVU8C517qjX3FmI {
  color: #00cc00;
  font-size: 1.5rem;
  margin-top: 5px;
  text-align: center;
}
.hgiHKYRg5KiqKL7JPxbo .UjESOzhBItW4d9gy8o1C {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 1rem;
}
.hgiHKYRg5KiqKL7JPxbo .UjESOzhBItW4d9gy8o1C:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.hgiHKYRg5KiqKL7JPxbo .A9GpQ2RQPKgPvlTVqTsx {
  color: white;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  width: 100%;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.hgiHKYRg5KiqKL7JPxbo .A9GpQ2RQPKgPvlTVqTsx:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACE,aAAA;EACE,WAAA;EACA,8DAAA;AAJJ;;AAOA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,8DAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR;AAeI;EACE,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;AAbN;AAeM;EACE,0CAAA;AAbR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n    width: 100%;\r\n    background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n}\r\n\r\n.container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    background: linear-gradient(to bottom right, #7bbd86, #1f644b);\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    .title {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      .label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n        margin-right: .5rem;\r\n      }\r\n  \r\n      .input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\r\n        width: 100%;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      .input:focus {\r\n        border-bottom-color: gold; /* Change border-bottom color on focus */\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1.5rem;\r\n      margin-top: 5px;\r\n      text-align: center;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: 1rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  \r\n    .link {\r\n      color: white;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      padding-top: .4rem;\r\n      padding-bottom: .4rem;\r\n      width: 100%;\r\n      transition: all 0.4s ease;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n  \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `hgiHKYRg5KiqKL7JPxbo`,
	"shine": `prKnyBj4DpKUJjJe4Scn`,
	"title": `ShCoqsJ6huUro8JPv_45`,
	"formGroup": `giAvVrxlj6RA_T11xv2w`,
	"label": `v1zUp4Yz443dMUXOoLZ9`,
	"input": `WSmKYTbPR1axz8UNKxJM`,
	"error": `dsn48Ypy3zIM9L9ONXzQ`,
	"success": `Ro4VRYVU8C517qjX3FmI`,
	"button": `UjESOzhBItW4d9gy8o1C`,
	"link": `A9GpQ2RQPKgPvlTVqTsx`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.BhuKYQMbo6CDs5TEOQpu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #f0f4f8;
  font-family: "Arial", sans-serif;
}

.PWX_g_VMspme8_cSTono {
  text-align: center;
  /*margin-bottom: \$spacing;*/
}

.OBTspGJTZnAdY2Os48Pi {
  font-size: 2.8rem;
  color: #222;
  margin-bottom: 15px;
  font-weight: 700;
}

.F0VfjngQuU7sOUUp64xQ {
  font-size: 1.2rem;
  color: #555;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.4rem;
}
.F0VfjngQuU7sOUUp64xQ a {
  color: #007bff;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.F0VfjngQuU7sOUUp64xQ a:hover {
  color: #0056b3;
  text-decoration: underline;
}
.F0VfjngQuU7sOUUp64xQ a:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.875rem;
  opacity: 1;
  visibility: visible;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease-in-out;
}

.vGcEnqVQcbvFTj8V3cd8 {
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.vGcEnqVQcbvFTj8V3cd8 li {
  margin: 0 15px;
  font-size: 1.1rem;
}
.vGcEnqVQcbvFTj8V3cd8 li a {
  color: #007bff;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.vGcEnqVQcbvFTj8V3cd8 li a:hover {
  color: #0056b3;
  text-decoration: underline;
}
.vGcEnqVQcbvFTj8V3cd8 li a:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.875rem;
  opacity: 1;
  visibility: visible;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease-in-out;
}

.e925z0tHP6bg6RY6_bz8 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  /*margin-bottom: \$spacing;*/
}
@media (max-width: 768px) {
  .e925z0tHP6bg6RY6_bz8 {
    grid-template-columns: 1fr;
  }
}

.uIkoYbZRAyO7S0wz6Zv0 {
  width: 100%;
  max-width: 900px;
}

.celPFavHWG7w6UM13Ep3 {
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  color: #222;
  font-weight: 700;
}

.kD8diVqCSCu0UIErwWwb {
  text-align: center;
  margin-bottom: 1.5rem;
}

.KgCHZYKFqgRPRUHVR3QH {
  margin: 2rem 0; /* Space above and below subsection */
  padding: 2rem;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.8rem;
}

.WVdNFKuzrSC7mX85BkXA {
  text-align: center;
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  padding-bottom: 10px;
}

.LwtNxAUvqztNoAGIj0vB {
  margin-top: 20px;
}
.LwtNxAUvqztNoAGIj0vB h4 {
  font-size: 1.7rem;
  color: #222;
  margin-bottom: 15px;
  font-weight: 600;
}
.LwtNxAUvqztNoAGIj0vB p,
.LwtNxAUvqztNoAGIj0vB ul {
  font-size: 1.15rem;
  color: #555;
  line-height: 1.4rem; /* Line height for paragraphs */
}
.LwtNxAUvqztNoAGIj0vB p {
  margin-bottom: 2rem; /* Margin below paragraphs for spacing */
}
.LwtNxAUvqztNoAGIj0vB ul {
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
}
.LwtNxAUvqztNoAGIj0vB ul li {
  margin-bottom: 8px;
}`, "",{"version":3,"sources":["webpack://./src/pages/Home/Home.module.scss"],"names":[],"mappings":"AAyDA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAnDS;EAoDT,yBA5DiB;EA6DjB,gCAhDY;AARd;;AA2DA;EA3CE,kBAAA;EA6CA,2BAAA;AAxDF;;AA2DA;EACE,iBAAA;EACA,WAzEc;EA0Ed,mBAAA;EACA,gBAAA;AAxDF;;AA2DA;EACE,iBAAA;EACA,WA/EgB;EAgFhB,gBAAA;EACA,cAAA;EACA,mBAnEY;AAWd;AAyDE;EAzDA,cAhBW;EAiBX,qBAAA;EACA,kBAAA;EACA,2BAAA;AAGF;AADE;EACE,cArBe;EAsBf,0BAAA;AAGJ;AAAE;EACE,2BAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,sBA9Be;EA+Bf,WA9BiB;EA+BjB,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EAhCF,wCAAA;EAkCE,oCAAA;AAEJ;;AAkCA;EACE,qBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;AA/BF;AAiCE;EACE,cAAA;EACA,iBAAA;AA/BJ;AAiCI;EA1EF,cAhBW;EAiBX,qBAAA;EACA,kBAAA;EACA,2BAAA;AA4CF;AA1CE;EACE,cArBe;EAsBf,0BAAA;AA4CJ;AAzCE;EACE,2BAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,sBA9Be;EA+Bf,WA9BiB;EA+BjB,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EAhCF,wCAAA;EAkCE,oCAAA;AA2CJ;;AAWA;EACE,aAAA;EACA,qCAAA;EACA,SArGQ;EAsGR,WAAA;EACA,iBAAA;EACA,2BAAA;AARF;AAUE;EARF;IASI,0BAAA;EAPF;AACF;;AAUA;EACE,WAAA;EACA,gBAAA;AAPF;;AAUA;EAtGE,kBAAA;EAwGA,iBAzHkB;EA0HlB,qBAtHS;EAuHT,WAjIc;EAkId,gBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,qBA7HS;AAsHX;;AAUA;EACE,cAAA,EAAA,qCAAA;EACA,aAnIQ;EAoIR,yBA1IY;EA2IZ,sBAAA;EACA,mBAAA;EA5HA,wCAAA;EA8HA,mBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,8CAAA;EACA,oBAAA;AAPF;;AAUA;EACE,gBAAA;AAPF;AASE;EACE,iBAvJmB;EAwJnB,WA/JY;EAgKZ,mBAAA;EACA,gBAAA;AAPJ;AAUE;;EAEE,kBA9Ja;EA+Jb,WAtKc;EAuKd,mBAxJU,EAwJiB,+BAAA;AAR/B;AAWE;EACE,mBAnKM,EAmKmB,wCAAA;AAT7B;AAYE;EACE,gBAAA;EACA,kBAAA;EACA,qBAAA;AAVJ;AAYI;EACE,kBAAA;AAVN","sourcesContent":["$primary-color: #222;\r\n$secondary-color: #555;\r\n$background-color: #f0f4f8;\r\n$white-color: #ffffff;\r\n$border-color: #ddd;\r\n$shadow-color: rgba(0, 0, 0, 0.1);\r\n$heading-font-size: 1.7rem;\r\n$subheading-font-size: 1.7rem;\r\n$text-font-size: 1.15rem;\r\n$spacing: 2rem;\r\n$spacing2: 1.5rem;\r\n$link-color: #007bff;\r\n$link-hover-color: #0056b3;\r\n$tooltip-bg-color: #333;\r\n$tooltip-text-color: #fff;\r\n$font-family: 'Arial', sans-serif;\r\n$line-height: 1.4rem;\r\n\r\n@mixin box-shadow($color) {\r\n  box-shadow: 0 4px 8px $color;\r\n}\r\n\r\n@mixin center-text {\r\n  text-align: center;\r\n}\r\n\r\n@mixin link-style {\r\n  color: $link-color;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: color 0.3s ease;\r\n\r\n  &:hover {\r\n    color: $link-hover-color;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  &:hover::after {\r\n    content: attr(data-tooltip);\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: $tooltip-bg-color;\r\n    color: $tooltip-text-color;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    white-space: nowrap;\r\n    font-size: 0.875rem;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    z-index: 1000;\r\n    @include box-shadow($shadow-color);\r\n    transition: opacity 0.2s ease-in-out;\r\n  }\r\n}\r\n\r\n.homeContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: $spacing2;\r\n  background-color: $background-color;\r\n  font-family: $font-family;\r\n}\r\n\r\n.header {\r\n  @include center-text;\r\n  /*margin-bottom: $spacing;*/\r\n}\r\n\r\n.projectTitle {\r\n  font-size: 2.8rem;\r\n  color: $primary-color;\r\n  margin-bottom: 15px;\r\n  font-weight: 700;\r\n}\r\n\r\n.projectDescription {\r\n  font-size: 1.2rem;\r\n  color: $secondary-color;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  line-height: $line-height;\r\n  a {\r\n    @include link-style;\r\n  }\r\n}\r\n\r\n.classmateList {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: $spacing2 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n\r\n  li {\r\n    margin: 0 15px;\r\n    font-size: 1.1rem;\r\n\r\n    a {\r\n      @include link-style;\r\n    }\r\n  }\r\n}\r\n\r\n.contentWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: $spacing;\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  /*margin-bottom: $spacing;*/\r\n\r\n  @media (max-width: 768px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n.section {\r\n  width: 100%;\r\n  max-width: 900px;\r\n}\r\n\r\n.title {\r\n  @include center-text;\r\n  font-size: $heading-font-size;\r\n  margin-bottom: $spacing2;\r\n  color: $primary-color;\r\n  font-weight: 700;\r\n}\r\n\r\n.titlep {\r\n  text-align: center;\r\n  margin-bottom: $spacing2;\r\n}\r\n\r\n.subsection {\r\n  margin: $spacing 0; /* Space above and below subsection */\r\n  padding: $spacing;\r\n  background-color: $white-color;\r\n  border: 1px solid $border-color;\r\n  border-radius: 10px;\r\n  @include box-shadow($shadow-color);\r\n  line-height: 1.8rem;\r\n}\r\n\r\n.h3styler {\r\n  text-align: center;\r\n  border-bottom: 1px solid rgba($primary-color, 0.5); \r\n  padding-bottom: 10px; \r\n}\r\n\r\n.functionality {\r\n  margin-top: 20px;\r\n\r\n  h4 {\r\n    font-size: $subheading-font-size;\r\n    color: $primary-color;\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  p,\r\n  ul {\r\n    font-size: $text-font-size;\r\n    color: $secondary-color;\r\n    line-height: $line-height; /* Line height for paragraphs */\r\n  }\r\n\r\n  p {\r\n    margin-bottom: $spacing; /* Margin below paragraphs for spacing */\r\n  }\r\n\r\n  ul {\r\n    margin-top: 10px;\r\n    padding-left: 20px;\r\n    list-style-type: disc;\r\n\r\n    li {\r\n      margin-bottom: 8px;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"homeContainer": `BhuKYQMbo6CDs5TEOQpu`,
	"header": `PWX_g_VMspme8_cSTono`,
	"projectTitle": `OBTspGJTZnAdY2Os48Pi`,
	"projectDescription": `F0VfjngQuU7sOUUp64xQ`,
	"classmateList": `vGcEnqVQcbvFTj8V3cd8`,
	"contentWrapper": `e925z0tHP6bg6RY6_bz8`,
	"section": `uIkoYbZRAyO7S0wz6Zv0`,
	"title": `celPFavHWG7w6UM13Ep3`,
	"titlep": `kD8diVqCSCu0UIErwWwb`,
	"subsection": `KgCHZYKFqgRPRUHVR3QH`,
	"h3styler": `WVdNFKuzrSC7mX85BkXA`,
	"functionality": `LwtNxAUvqztNoAGIj0vB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NotFound/NotFound.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NotFound/NotFound.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.YtltBNSc1duQW_TEt9KQ {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
  color: #333;
}
.YtltBNSc1duQW_TEt9KQ h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}
.YtltBNSc1duQW_TEt9KQ p {
  font-size: 1.2em;
  margin-bottom: 1.5em;
}

.meFM1QFiQme5BADtANg1 {
  width: 300px;
  height: auto;
  margin-bottom: 1.5em;
}

.YvxoE3PflSPaHZNYgLhA {
  display: flex;
  gap: 1em;
}

.KXaYl38O6wHgwpnoCNMS {
  text-decoration: none;
  color: #007bff;
  padding: 0.5em 1em;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}
.KXaYl38O6wHgwpnoCNMS:hover {
  background-color: #007bff;
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/pages/NotFound/NotFound.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;AACJ;AACI;EACE,gBAAA;EACA,kBAAA;AACN;AAEI;EACE,gBAAA;EACA,oBAAA;AAAN;;AAIE;EACE,YAAA;EACA,YAAA;EACA,oBAAA;AADJ;;AAIE;EACE,aAAA;EACA,QAAA;AADJ;;AAIE;EACE,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,6CAAA;AADJ;AAGI;EACE,yBAAA;EACA,WAAA;AADN","sourcesContent":[".notFoundContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    text-align: center;\r\n    background-color: #f8f8f8;\r\n    color: #333;\r\n  \r\n    h1 {\r\n      font-size: 2.5em;\r\n      margin-bottom: 1em;\r\n    }\r\n  \r\n    p {\r\n      font-size: 1.2em;\r\n      margin-bottom: 1.5em;\r\n    }\r\n  }\r\n  \r\n  .notFoundImage {\r\n    width: 300px;\r\n    height: auto;\r\n    margin-bottom: 1.5em;\r\n  }\r\n  \r\n  .notFoundOptions {\r\n    display: flex;\r\n    gap: 1em;\r\n  }\r\n  \r\n  .notFoundLink {\r\n    text-decoration: none;\r\n    color: #007bff;\r\n    padding: 0.5em 1em;\r\n    border: 1px solid #007bff;\r\n    border-radius: 5px;\r\n    transition: background-color 0.3s, color 0.3s;\r\n  \r\n    &:hover {\r\n      background-color: #007bff;\r\n      color: #fff;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"notFoundContainer": `YtltBNSc1duQW_TEt9KQ`,
	"notFoundImage": `meFM1QFiQme5BADtANg1`,
	"notFoundOptions": `YvxoE3PflSPaHZNYgLhA`,
	"notFoundLink": `KXaYl38O6wHgwpnoCNMS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.FkWoUnDlNksjug4CqvlJ {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.dLvKDBPazatxYec9ehEd {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dkPJn_jEKkZcr2Vc_ipn {
  margin-top: 20px;
}

.dkPJn_jEKkZcr2Vc_ipn p {
  margin: 10px 0;
}

.V4HmupuSK6SWe00IkO0C {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2dede;
  color: #a94442;
  border: 1px solid #ebccd1;
  border-radius: 4px;
  padding: 20px;
}

.V4HmupuSK6SWe00IkO0C button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.V4HmupuSK6SWe00IkO0C button:hover {
  background-color: #c9302c;
}

.qcbaNGQXhwOkcjMNwDKt {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.qcbaNGQXhwOkcjMNwDKt:hover {
  background-color: #c9302c;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,uCAAA;AACJ;;AAEE;EACE,gBAAA;AACJ;;AAEE;EACE,cAAA;AACJ;;AAEE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEE;EACE,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AACJ;;AAEE;EACE,yBAAA;AACJ","sourcesContent":[".profileContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    background-color: #f9f9f9;\r\n  }\r\n  \r\n  .profileContent {\r\n    text-align: center;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .userInfo {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .userInfo p {\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .loginPrompt {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    background-color: #f2dede;\r\n    color: #a94442;\r\n    border: 1px solid #ebccd1;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .loginPrompt button {\r\n    margin-top: 10px;\r\n    padding: 10px 20px;\r\n    background-color: #d9534f;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .loginPrompt button:hover {\r\n    background-color: #c9302c;\r\n  }\r\n  \r\n  .logoutButton {\r\n    margin-top: 20px;\r\n    padding: 10px 20px;\r\n    background-color: #d9534f;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .logoutButton:hover {\r\n    background-color: #c9302c;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"profileContainer": `FkWoUnDlNksjug4CqvlJ`,
	"profileContent": `dLvKDBPazatxYec9ehEd`,
	"userInfo": `dkPJn_jEKkZcr2Vc_ipn`,
	"loginPrompt": `V4HmupuSK6SWe00IkO0C`,
	"logoutButton": `qcbaNGQXhwOkcjMNwDKt`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ResetPassword/ResetPassword.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ResetPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SignUpForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AuthPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPasswordForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPasswordForm/ForgotPasswordForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!*************************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Home/Home.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/Home/Home.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Home.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Home/Home.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/NotFound/NotFound.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/NotFound/NotFound.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NotFound_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NotFound.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NotFound/NotFound.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NotFound_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NotFound_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NotFound_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NotFound_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.7a169465dba1145ca8251703e2f20ec6.js.map