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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_AuthPage_Authpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/AuthPage/Authpage */ "./src/pages/AuthPage/Authpage.js");
/* harmony import */ var _pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./src/pages/ForgotPassword/ForgotPassword.js");
/* harmony import */ var _components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ResetPassword/ResetPassword */ "./src/components/ResetPassword/ResetPassword.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");



 // Adjust the import path as needed


function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/auth",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AuthPage_Authpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/auth/forgot-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/reset-password/:token",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/profile/:userId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      setUser: setUser
    })
  })));
}

/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");
/* harmony import */ var _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordForm.module.scss */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");




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
    try {
      const user = await _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.login(credentials, rememberMe);
      setUser(user); // Assuming `user` object contains necessary user data
      navigate('/'); // Redirect to the home page or dashboard
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
  }, /*#__PURE__*/React.createElement("h1", null, "DevHive")), /*#__PURE__*/React.createElement("div", {
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
  }, "Sign Up"))))), /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "New Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Confirm Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }, "Reset Password")));
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
const _excluded = ["userType"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
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
    console.log("".concat(name, " changed to:"), value); // Logging each input change
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      console.log('Submitting form with data:', formData); // Log form data
      const {
          userType
        } = formData,
        userData = _objectWithoutProperties(formData, _excluded);
      const user = await _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.signUp(userData); // Log the response
      console.log('User signed up:', user);
      setUser(user);
      navigate("/profile/".concat(user._id));
    } catch (err) {
      console.error('Sign Up Failed:', err); // Log the error
      setError('Sign Up Failed - Try Again');
    }
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "DevHive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Already have an account? Log In")))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

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
/* harmony import */ var _components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ForgotPasswordForm/ForgotPasswordForm */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js");
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/api-service */ "./src/utilities/api-service.js");




// import { getAllPostsByUser } from '../../utilities/api-service';

const ensureHttps = url => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};
function ProfilePage(_ref) {
  let {
    user
  } = _ref;
  const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [profilePosts, setProfilePosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoadingUser, setIsLoadingUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoadingPosts, setIsLoadingPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoggedInUser, setIsLoggedInUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // save profile user from params
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  // get loggedInuser from props
  const loggedInUser = user;

  // get posts of user from db
  const fetchProfilePosts = async () => {
    setIsLoadingPosts(true);
    console.log('User Id:', userId);
    console.log('About to call API');
    const foundPosts = await getAllPostsByUser(userId);
    console.log(foundPosts);
    setProfilePosts(foundPosts);
    setIsLoadingPosts(false);
  };

  // get profile user
  const fetchProfileUser = async () => {
    setIsLoadingUser(true);
    const foundUser = await (0,_utilities_api_service__WEBPACK_IMPORTED_MODULE_3__.getProfileUser)(userId);
    setProfileUser(foundUser);
    setIsLoadingUser(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoggedInUser(!!(userId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id)));
  }, [userId, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfilePosts();
  }, [userId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfileUser();
  }, [userId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfilePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topContainer
  }, isLoadingUser || isLoadingPosts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userHeading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userName
  }, profileUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileImage, {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfileImage,
    user: profileUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLink,
    href: profileUser.gitHubLink ? ensureHttps(profileUser.gitHubLink) : '#',
    target: profileUser.gitHubLink ? '_blank' : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLogo,
    src: "https://i.imgur.com/F796Bnt.png",
    alt: "GitHub"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLink,
    href: profileUser.portfolioLink ? ensureHttps(profileUser.portfolioLink) : '#'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLogo,
    src: "https://cdn-icons-png.flaticon.com/128/3683/3683218.png",
    alt: "Portfolio"
  })))), profileUser.bio ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, profileUser.bio) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, "No bio at this time.")), isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FollowList, {
    posts: profilePosts
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PostList, {
    posts: profilePosts,
    user: loggedInUser
  }));
}

/***/ }),

/***/ "./src/utilities/api-service.js":
/*!**************************************!*\
  !*** ./src/utilities/api-service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileUser: () => (/* binding */ getProfileUser),
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updatePasswordWithToken: () => (/* binding */ updatePasswordWithToken)
/* harmony export */ });
/* unused harmony exports getUser, indexUsers, logOut */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");

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
async function login(credentials) {
  try {
    console.log('Logging in with credentials:', credentials);
    const response = await fetch("".concat(BASE_URL, "/login"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const token = await response.json();
    localStorage.setItem('token', token);
    return await getUser();
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes Zc6uiYv2ixSANn506Sh4 {
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
  height: 110vh;
  width: 100%;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
}

.IFrs_wH6ZfFHkHIS8B6M {
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
  animation: Zc6uiYv2ixSANn506Sh4 5s infinite linear;
}
.IFrs_wH6ZfFHkHIS8B6M .UTc0JEGiUZqz7lXpMPGP {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 {
  margin-bottom: 20px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .zRVbsS04lV0e_b5a7FRh {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
  margin-right: 0.5rem;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.IFrs_wH6ZfFHkHIS8B6M .wqDD0RnwvlD8OebalB57 {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .dkaYBCIu5vx4QlxGCyHi {
  color: #00cc00;
  font-size: 1.5rem;
  margin-top: 5px;
  text-align: center;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv {
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
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ {
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
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACE,aAAA;EACE,WAAA;EACA,8DAAA;AAJJ;;AAOA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,8DAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR;AAeI;EACE,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;AAbN;AAeM;EACE,0CAAA;AAbR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\nbody {\r\n  height: 110vh;\r\n    width: 100%;\r\n    background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n}\r\n\r\n.container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    background: linear-gradient(to bottom right, #7bbd86, #1f644b);\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    .title {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      .label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n        margin-right: .5rem;\r\n      }\r\n  \r\n      .input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\r\n        width: 30vh;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      .input:focus {\r\n        border-bottom-color: gold; /* Change border-bottom color on focus */\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1.5rem;\r\n      margin-top: 5px;\r\n      text-align: center;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: 1rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  \r\n    .link {\r\n      color: white;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      padding-top: .4rem;\r\n      padding-bottom: .4rem;\r\n      width: 100%;\r\n      transition: all 0.4s ease;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n  \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `IFrs_wH6ZfFHkHIS8B6M`,
	"shine": `Zc6uiYv2ixSANn506Sh4`,
	"title": `UTc0JEGiUZqz7lXpMPGP`,
	"formGroup": `nBEjfZACLKijxcoaL9J7`,
	"label": `zRVbsS04lV0e_b5a7FRh`,
	"input": `xofrtecfoEYsMc4ph_4G`,
	"error": `wqDD0RnwvlD8OebalB57`,
	"success": `dkaYBCIu5vx4QlxGCyHi`,
	"button": `SQ6pFGLe9fdptuyzihAv`,
	"link": `_uR7x4NFZTbsc3UtpAtZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
  height: 110vh;
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
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,cAAA;IACA,mBAAA;EACF;EACA;IACE,cAAA;IACA,qBAAA;EACF;EACA;IACE,cAAA;IACA,mBAAA;EACF;AACF;AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,WAAA;AALF;;AAQA;EACE,eAAA;AALF;;AAQA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AALF;AAME;EACE,oCAAA,EAAA,iCAAA;AAJJ;AAOE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;AALJ;AAQE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AANJ;AAQI;EAEE,gBAAA;EACA,SAAA;AAPN;;AAYA,uBAAA;AAEA;EACE,eAAA;EACA,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAVF;AAYE;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AAVJ;AAaE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;AAeE;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAbJ;AAeI;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,kBAAA;EACA,qBAAA;AAbN;AAeM;EACE,gBAAA;EACA,mBAAA;EACA,kDAAA;AAbR;AAiBM;EACE,iBAAA;EACA,eAAA;AAfR;AAqBI;EACE,eAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,2BAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAnBd;AAoBM;EACE,0BAAA;EACA,WAAA;EACA,eAAA;AAlBR;AAwBE;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAtBJ;AAwBI;EACE,0BAAA;EACA,eAAA;AAtBN;AA0BM;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAxBR;AA0BQ;EACE,0BAAA;AAxBV;AA8BE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA5BZ;AA6BI;EACE,0CAAA;AA3BN;AA+BE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA7BZ","sourcesContent":["@keyframes labelCheckedAnimation {\r\n  0% {\r\n    color: #c3ffb3; \r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    color: #98fb98; \r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    color: #c3ffb3;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.LoginForm {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 110vh;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n}\r\n\r\nh4 {\r\n  font-size: 3rem;\r\n}\r\n\r\n/* Inputbox styles */\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  max-width: 40vh;\r\n  border-bottom: 2px solid #fff;\r\n  &:focus-within {\r\n    border-bottom-color: gold !important; /* Change border color on focus */\r\n  }\r\n\r\n  .label {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    transform: translateY(-40%);\r\n    color: #fff;\r\n    font-size: 1.25rem;\r\n    pointer-events: none;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  input {\r\n    width: 100%;\r\n    height: 60px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bolder;\r\n    padding: 0 35px 0 5px;\r\n    color: #fff;\r\n\r\n    &:focus ~ label,\r\n    &:valid ~ label {\r\n      color: lightgray;\r\n      top: -5px;\r\n    }\r\n  }\r\n}\r\n\r\n/* Rest of the styles */\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 50vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  overflow: hidden;\r\n  animation: shine 5s infinite linear;\r\n\r\n  .title {\r\n    width: 100%;\r\n    color: #fff;\r\n    padding: 10px;\r\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 3rem;\r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .errorSign {\r\n    display: block;\r\n  }\r\n\r\n  .lost {\r\n    margin: 35px 2px;\r\n    font-size: 0.85rem;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n\r\n    label {\r\n      font-size: 1rem;\r\n      display: flex;\r\n      align-items: center;\r\n      padding: .1rem;\r\n      cursor: pointer;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      margin-right: 1rem;\r\n      margin-left: -1.25rem;\r\n      \r\n      &:has(input:checked) {\r\n        color: darkgreen;\r\n        font-weight: bolder;\r\n        animation: labelCheckedAnimation 0.5s ease forwards;\r\n      }\r\n\r\n\r\n      input {\r\n        margin-right: 5px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      \r\n    }\r\n\r\n    .forgotPassword {\r\n      font-size: 1rem;\r\n      color: #fff;\r\n      text-decoration: none;\r\n      font-weight: 600;\r\n      transition: color 0.3s ease;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      &:hover {\r\n        text-decoration: underline;\r\n        color: #ccc;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  \r\n  .register {\r\n    font-size: 0.9rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin: 25px 0 10px;\r\n\r\n    &:hover {\r\n      text-decoration: underline;\r\n      cursor: pointer;\r\n    }\r\n\r\n    p {\r\n      .forgotPassword {\r\n        text-decoration: none;\r\n        color: #fff;\r\n        font-weight: 600;\r\n\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  button {\r\n    color: white;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n    background-color: rgb(87, 163, 115);\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    transition: all 0.4s ease;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    &:hover {\r\n      background-color: rgba(255, 255, 255, 0.5);\r\n    }\r\n  }\r\n\r\n  .showPasswordIcon {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    font-size: 1.5rem;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    color: #ccc;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n  }\r\n}"],"sourceRoot":""}]);
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
	"showPasswordIcon": `ZUKc8FFOJWWao8EDdobQ`
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
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
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
  margin-bottom: 1rem;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ResetPassword/ResetPassword.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,8DAAA;EACA,uBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: linear-gradient(to bottom right, #7bbd86, #1f644b);\r\n    border: 1px solid black;\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    border: 2px solid rgba(255, 255, 255, 0.5);\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    h1 {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n      }\r\n  \r\n      input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\r\n        width: 30vh;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      input:focus {\r\n        border-bottom-color: gold; /* Change border-bottom color on focus */\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1rem;\r\n      margin-top: 5px;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: 1rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA,gBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kDAAA;AALF;AAOE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,8CAAA;EACA,oBAAA;AALJ;;AASA;EACE,kBAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,6BAAA;AANF;AAQE;EACE,oCAAA;AANJ;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAPV;;AAUA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;EACE,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;;EAEE,gBAAA;EACA,SAAA;AAPJ;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AAPF;;AAUA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAPF;;AAUA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAPF;;AAUA;EACI,0BAAA;EACA,eAAA;AAPJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,0CAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAPF;;AAUA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAPF;;AAUA;EACE,0BAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n/* Body styles */\r\n.body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 43.3vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  overflow: hidden; \r\n  animation: shine 5s infinite linear;\r\n\r\n  h1 {\r\n    font-size: 3rem; \r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\r\n    padding-top: .64rem;\r\n  }\r\n}\r\n\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  border-bottom: 2px solid #fff;\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  width: 30vh;\r\n  border-bottom: 2px solid #fff;\r\n  \r\n  &:focus-within {\r\n    border-bottom-color: gold !important; \r\n  }\r\n}\r\n\r\n.inputbox label {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 2px;\r\n  transform: translateY(-40%);\r\n  color: #fff;\r\n  font-size: 1.25rem; \r\n  pointer-events: none;\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.inputbox select {\r\n    width: 100%;\r\n    height: 80px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    color: #fff;\r\n  }\r\n  \r\n  .inputbox select option {\r\n    font-size: 1.25rem;\r\n    background-color: #081C15; \r\n    border-radius: 2px;\r\n    color: #fff; \r\n  }\r\n\r\n  .inputbox input:focus ~ label,\r\n  .inputbox input:valid ~ label {\r\n    color: lightgray;\r\n    top: -5px;\r\n  }\r\n  \r\n.inputbox input {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 0;\r\n}\r\n\r\n.login {\r\n  margin-top: 20px; \r\n  font-size: 0.85rem;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.login p a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.login p:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  width: 100%;\r\n  height: 40px;\r\n  border-radius: 40px;\r\n  background-color: rgb(87, 163, 115);\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n.button:hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.inputbox select {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n}\r\n\r\nselect:hover {\r\n  cursor: pointer;\r\n}\r\n\r\noption {\r\n  color: black;\r\n}\r\n\r\n.register {\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.register p a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.register p a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.showPasswordIcon {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50%;\r\n  font-size: 1.5rem;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n  color: #ccc;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"body": `xCrr_Bbs2iSq5QC2RUqr`,
	"boxc": `O3kJQXyeVBVPoVbc0TQA`,
	"shine": `KiN27HiRvEoQXCiZZer1`,
	"inputbox": `G5WQETTTkTlRpPef5KUY`,
	"login": `emIz9U5VSVFVmZPhEvKw`,
	"button": `xyMV8WMo_VF047TUcQck`,
	"register": `JtQI_Hm4R0_7b5aQ1Jdw`,
	"showPasswordIcon": `XEq2Dm2tfurQtGWxCT44`
};
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
___CSS_LOADER_EXPORT___.push([module.id, `.z1XFB0qbBjHblp8c_F5M {
  margin: 10vh auto 0;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 10rem;
  display: flex;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg {
  width: 60%;
  max-height: 50rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-height: 40rem;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  padding: 2rem;
  border: 0.1rem solid rgba(51, 86, 51, 0.3);
  border-radius: 20px;
  box-shadow: 0 0 0.3rem var(--text-green);
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .syKW9dLz4EwS_wpHk6_0 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .dbIMdhqIGQg9JtZeKmrK {
  color: black;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH {
  width: 15rem;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj:hover {
  filter: invert(100%);
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  padding: 0.9rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw:hover {
  filter: invert(100%);
  transition: 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;AACJ;AAAI;EACI,UAAA;EACA,iBAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,8DAAA;EACA,aAAA;EACA,0CAAA;EACA,mBAAA;EACA,wCAAA;AAGZ;AAFY;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAIhB;AAFY;EACI,YAAA;AAIhB;AAFY;EACI,YAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AAIhB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB","sourcesContent":[".ProfilePage {\r\n    margin: 10vh auto 0;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 2rem 10rem;\r\n    display: flex;\r\n    .topContainer {\r\n        width: 60%;\r\n        max-height: 50rem;\r\n        .userContainer {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items: center;\r\n            width: 90%;\r\n            max-height: 40rem;\r\n            background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n            padding: 2rem;\r\n            border: .1rem solid rgb(51, 86, 51, 0.3);\r\n            border-radius: 20px;\r\n            box-shadow: 0 0 .3rem var(--text-green);\r\n            .imgContainer {\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: center;\r\n                width: 15rem;\r\n            }\r\n            .userBio {\r\n                color: black;\r\n            }\r\n            .userLinks {\r\n                width: 15rem;\r\n                display: flex;\r\n                justify-content: space-evenly;\r\n                margin-bottom: 1.5rem;\r\n                .ghLogo {\r\n                    background-color: lightgrey;\r\n                    border-radius: 100%;\r\n                    width: 4rem;\r\n                    transition: .3s ease;\r\n                    &:hover {\r\n                        filter: invert(100%);\r\n                        transition: .3s ease;\r\n                    }\r\n                }\r\n                .portfolioLogo {\r\n                    background-color: lightgrey;\r\n                    border-radius: 100%;\r\n                    width: 4rem;\r\n                    padding: .9rem;\r\n                    transition: .3s ease;\r\n                    &:hover {\r\n                        filter: invert(100%);\r\n                        transition: .3s ease;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePage": `z1XFB0qbBjHblp8c_F5M`,
	"topContainer": `Fn3Y8z6cyE3sFTgZXhsg`,
	"userContainer": `C3y4TdU4vKMpvL4_wj8H`,
	"imgContainer": `syKW9dLz4EwS_wpHk6_0`,
	"userBio": `dbIMdhqIGQg9JtZeKmrK`,
	"userLinks": `LG29adQOef4sgu1x7iuH`,
	"ghLogo": `VTiGYB_vr7yJA7Vk5uTj`,
	"portfolioLogo": `f9PniY17HdeQBxVJqbhw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPasswordForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=App.7dd1cb3ec706280323a95d775b193fdd.js.map