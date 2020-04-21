module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { "forbid": ["any"] }],
    "arrow-body-style": [1, "always"],
    "max-len": 0,
  }
}
