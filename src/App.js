"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var handleClick = function () { };
exports.App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Breadcrumbs, null,
            react_1.default.createElement(core_1.Link, { href: "/", onClick: handleClick }, "Material-UI"),
            react_1.default.createElement(core_1.Link, { href: "/getting-started/installation/", onClick: handleClick }, "Core"),
            react_1.default.createElement(core_1.Typography, { color: "textPrimary" }, "Breadcrumb"))));
};
//# sourceMappingURL=App.js.map