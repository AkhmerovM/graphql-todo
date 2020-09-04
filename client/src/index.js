"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
require("./style/index.less");
require("antd/dist/antd.css");
var root = document.getElementById('root');
if (!root) {
    throw new Error('root element not found');
}
react_dom_1["default"].render(<App_1.App />, root);
