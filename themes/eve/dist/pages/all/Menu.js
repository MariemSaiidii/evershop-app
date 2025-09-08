import PropTypes from "prop-types";
import React from "react";
export default function Menu({ menu: { items } }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: "main-menu self-center hidden md:block"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "nav flex space-x-275 justify-content-center"
    }, items.map((i, index)=>// eslint-disable-next-line react/no-array-index-key
        /*#__PURE__*/ React.createElement("li", {
            className: "nav-item",
            key: index
        }, /*#__PURE__*/ React.createElement("a", {
            className: "nav-link hover:underline",
            href: i.url
        }, i.name))), /*#__PURE__*/ React.createElement("li", {
        className: "nav-item"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "nav-link hover:underline",
        href: "/page/contact"
    }, "Contact"))));
}
Menu.propTypes = {
    menu: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};
export const layout = {
    areaId: "header",
    sortOrder: 1
};
export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
