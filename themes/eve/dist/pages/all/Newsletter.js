import React from "react";
function Newsletter() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "mt-[50px]"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "page-width"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "rounded p-[30px] bg-[#E8D5C4]"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mb-3"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-center"
    }, "NEWSLETTER"), /*#__PURE__*/ React.createElement("p", {
        className: "text-center"
    }, "Subscribe to our newsletter and get 10% off your first purchase!")), /*#__PURE__*/ React.createElement("div", {
        className: "flex justify-center items-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex gap-2 "
    }, /*#__PURE__*/ React.createElement("input", {
        className: "border border-divider rounded",
        type: "text",
        placeholder: "Enter your email address"
    }), /*#__PURE__*/ React.createElement("button", {
        className: "button"
    }, "Subscribe"))))));
}
export default Newsletter;
export const layout = {
    areaId: "content",
    sortOrder: 50
};
