"use strict"

module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-csstree-validator",
    "stylelint-scss",
    "stylelint-order",
  ],
  rules: {
    //
    // Color
    // ====================
    "color-named": "never", // Require (where possible) or disallow named colors.
    //
    // Font
    // ====================
    "font-family-name-quotes": "always-where-recommended", // Specify whether or not quotation marks should be used around font family names.
    //
    // Function
    // ====================
    "function-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of functions.
    "function-comma-space-before": "never-single-line", // Require a single space or disallow whitespace before the commas of functions.
    "function-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    "function-url-quotes": "always", // Require or disallow quotes for urls.
    //
    // Number
    // ====================
    "number-leading-zero": "never", // Require or disallow a leading zero for fractional numbers less than 1.
    "number-max-precision": 4, // Limit the number of decimal places allowed in numbers.
    //
    // String
    // ====================
    "string-quotes": "single", // Specify single or double quotes around strings.
    //
    // Unit
    // ====================
    "unit-blacklist": [ "in", "cm", "mm" ], // Specify a blacklist of disallowed units.
    //
    // Value
    // ====================
    "value-keyword-case": "lower", // Specify lowercase or uppercase for keywords values.
    "value-no-vendor-prefix": true, // Disallow vendor prefixes for values.
    //
    // Value list
    // ====================
    "value-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of value lists.
    "value-list-comma-space-before": "never-single-line", // Require a single space or disallow whitespace before the commas of value lists.
    //
    // Property
    // ====================
    "property-no-vendor-prefix": true, // Disallow vendor prefixes for properties.
    //
    // Declaration block
    // ====================
    "declaration-block-no-duplicate-properties": true, // Disallow duplicate properties within declaration blocks.
    "declaration-block-semicolon-newline-after": "always", // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    "declaration-block-semicolon-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    //
    // Selector
    // ====================
    "selector-no-id": true, // Disallow id selectors.
    "selector-no-vendor-prefix": true, // Disallow vendor prefixes for selectors.
    "selector-pseudo-element-colon-notation": "single", // Specify single or double colon notation for applicable pseudo-elements.
    //
    // Selector list
    // ====================
    "selector-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of selector lists.
    //
    // Rule
    // ====================
    "rule-empty-line-before": [ // Require or disallow an empty line before nested rules.
      "always",
      {
        except: ["first-nested"], // Reverse the primary option if the rule is the first in a block.
        ignore: ["after-comment"], // Ignore rules that come after a comment.
      },
    ],
    //
    // Media feature
    // ====================
    "media-feature-name-no-vendor-prefix": true, //  Disallow vendor prefixes for media feature names.
    //
    // Media query list
    // ====================
    "media-query-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of media query lists.
    //
    // At-rule
    // ====================
    "at-rule-name-space-after": "always", // Require a single space after at-rule names.
    "at-rule-no-unknown": [
      true, // Disallow unknown at-rules.
      {
        "ignoreAtRules": [
          "include",
          "mixin",
        ],
      },
    ],
    "at-rule-no-vendor-prefix": true, // Disallow vendor prefixes for at-rules.
    //
    // General / Sheet
    // ====================
    "max-line-length": 120, // Limit the length of a line.
    "no-duplicate-selectors": true, // Disallow duplicate selectors.
    //
    // Plugin - CSSTree Validator
    // ==========================
    "csstree/validator": true,
    //
    // Plugin - Scss
    // ==========================
    "scss/at-mixin-argumentless-call-parentheses": "always", // Require or disallow parentheses in argumentless @mixin calls.
    "scss/dollar-variable-colon-newline-after": "always-multi-line", // Require a newline after the colon in $-variable declarations.
    "scss/dollar-variable-colon-space-after": "always", // Require a single space or disallow whitespace after the colon in $-variable declarations.
    "scss/dollar-variable-colon-space-before": "never", // Require a single space or disallow whitespace before the colon in $-variable declarations.
    //
    // Plugin - Order
    // ==========================
    "order/declaration-block-order": [ // Specify the order of content within declaration blocks.
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules"
    ],
    "order/declaration-block-properties-specified-order": [  // Specify the almost strict order of properties within declaration blocks.
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "float",
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "osx-font-smoothing",
      "font-style",
      "font-weight",
      "font-variant",
      "hyphens",
      "src",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "color",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",
      "word-break",
      "word-wrap",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "pointer-events",
      "cursor",
      "background",
      "background-attachment",
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-collapse",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",
      "content",
      "quotes",
      "outline",
      "outline-offset",
      "opacity",
      "filter",
      "visibility",
      "size",
      "zoom",
      "transform",
      "box-align",
      "box-flex",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "table-layout",
      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "background-clip",
      "backface-visibility",
      "resize",
      "appearance",
      "user-select",
      "interpolation-mode",
      "direction",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak",
    ],
  },
}
