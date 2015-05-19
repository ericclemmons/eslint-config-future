var assign = require("object-assign");
var defaults = require("./defaults");

var react = assign({}, defaults);

assign(react, {
  plugins: ["react"],
});

assign(react.rules, {
  "react/display-name": 2,
  "react/jsx-uses-react": 1,
  "react/jsx-uses-vars": 1,
  "react/no-did-mount-set-state": 1,
  "react/no-did-update-set-state": 1,
  "react/no-multi-comp": 2,
  "react/prop-types": 0,
  "react/react-in-jsx-scope": 2,
  "react/self-closing-comp": 1,
  "react/wrap-multilines": 2
});

module.exports = react;
