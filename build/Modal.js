var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var ModalComponent = function (params) {
    if (!params.display) {
        return null;
    }
    return (_jsx("div", __assign({ onClick: function () { return params.changeDisplay(false); }, style: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.15)"
        } }, { children: _jsxs("div", __assign({ className: "modal", onClick: function (e) { return e.stopPropagation(); }, style: {
                position: "absolute",
                background: "#fff",
                top: 25,
                left: "10%",
                right: "10%",
                padding: 15,
                border: "2px solid #444"
            } }, { children: [_jsx("h1", { children: params.title }, void 0), params.children] }), void 0) }), void 0));
};
