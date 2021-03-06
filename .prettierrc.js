module.exports = {
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["after-same-name", "first-nested"],
        ignoreAtRules: ["else"],
      },
    ],
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        ignore: ["stylelint-commands", "after-comment"],
      },
    ],
    // "declaration-colon-space-after": "never",
    indentation: 2,
    "max-empty-lines": 2,
    "no-empty-first-line": true,
    "no-missing-end-of-source-newline": 2,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
  },
};
