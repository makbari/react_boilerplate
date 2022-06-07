module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-case": [2, "always", ["sentence-case"]],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
  },
};