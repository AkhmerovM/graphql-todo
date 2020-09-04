"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddForm = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var style_local_less_1 = __importDefault(require("./style.local.less"));
function AddForm(_a) {
    var handleSubmitForm = _a.handleSubmitForm;
    var inputRef = react_1.useRef(null);
    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];
    var handleChange = react_1.useCallback(function (e) {
        var text = e.target.value;
        setValue(text);
    }, []);
    var handleSubmit = react_1.useCallback(function () {
        handleSubmitForm(value);
        setValue('');
    }, [value, handleSubmitForm]);
    return (react_1.default.createElement("div", { className: style_local_less_1.default.addForm },
        react_1.default.createElement(antd_1.Input, { value: value, className: style_local_less_1.default.addFormInput, onChange: handleChange, ref: inputRef }),
        react_1.default.createElement(antd_1.Button, { disabled: !value, type: "primary", onClick: handleSubmit }, "Add")));
}
exports.AddForm = AddForm;
