import propertiesOrder from "./declaration-block-properties-order"

/**
 * Rules settings
 *
 * @see http://stylelint.io/user-guide/rules/
 *
 * @type Object
 */
const rules = {
  //
  // Color
  // ====================

  "color-hex-case": "lower", // Specify lowercase or uppercase for hex colors.
  "color-hex-length": "short", // Specify short or long notation for hex colors.
  "color-named": "never", // Require (where possible) or disallow named colors.
  "color-no-invalid-hex": true, // Disallow invalid hex colors.

  //
  // Font
  // ====================

  "font-family-name-quotes": "always-where-recommended", // Specify whether or not quotation marks should be used around font family names.

  //
  // Function
  // ====================

  "function-calc-no-unspaced-operator": true, // Disallow an unspaced operator within calc functions.
  "function-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of functions.
  "function-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of functions.
  "function-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of functions.
  "function-comma-space-before": "never-single-line", // Require a single space or disallow whitespace before the commas of functions.
  "function-linear-gradient-no-nonstandard-direction": true, // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
  "function-max-empty-lines": 0, // Limit the number of adjacent empty lines within functions.
  "function-parentheses-newline-inside": "always-multi-line", // Require a newline or disallow whitespace on the inside of the parentheses of functions.
  "function-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses of functions.
  "function-url-quotes": "always", // Require or disallow quotes for urls.

  //
  // Number
  // ====================

  "number-leading-zero": "never", // Require or disallow a leading zero for fractional numbers less than 1.
  "number-max-precision": 4, // Limit the number of decimal places allowed in numbers.
  "number-no-trailing-zeros": true, // Disallow trailing zeros in numbers.

  //
  // String
  // ====================

  "string-no-newline": true, // Disallow (unescaped) newlines in strings.
  "string-quotes": "single", // Specify single or double quotes around strings.

  //
  // Length
  // ====================

  "length-zero-no-unit": true, // Disallow units for zero lengths.

  //
  // Unit
  // ====================

  "unit-blacklist": [ "in", "cm", "mm" ], // Specify a blacklist of disallowed units.
  "unit-case": "lower", // Specify lowercase or uppercase for units.
  "unit-no-unknown": true, // Disallow unknown units.

  //
  // Value
  // ====================

  "value-keyword-case": "lower", // Specify lowercase or uppercase for keywords values.
  "value-no-vendor-prefix": true, // Disallow vendor prefixes for values.

  //
  // Value list
  // ====================

  "value-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of value lists.
  "value-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of value lists.
  "value-list-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of value lists.
  "value-list-comma-space-before": "never-single-line", // Require a single space or disallow whitespace before the commas of value lists.

  //
  // Shorthand property
  // ====================

  "shorthand-property-no-redundant-values": true, // Disallow redundant values in shorthand properties.

  //
  // Property
  // ====================

  "property-case": "lower", // Specify lowercase or uppercase for properties.
  "property-no-vendor-prefix": true, // Disallow vendor prefixes for properties.

  //
  // Keyframe declaration
  // ====================

  "keyframe-declaration-no-important": true, // Disallow !important within keyframe declarations.

  //
  // Declaration
  // ====================

  "declaration-bang-space-after": "never", // Require a single space or disallow whitespace after the bang of declarations.
  "declaration-bang-space-before": "always", // Require a single space or disallow whitespace before the bang of declarations.
  "declaration-colon-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the colon of declarations.
  "declaration-colon-space-after": "always-single-line", // Require a single space or disallow whitespace after the colon of declarations.
  "declaration-colon-space-before": "never", // Require a single space or disallow whitespace before the colon of declarations.

  //
  // Declaration block
  // ====================

  "declaration-block-no-duplicate-properties": true, // Disallow duplicate properties within declaration blocks.
  "declaration-block-no-ignored-properties": true, // Disallow property values that are ignored due to another property value in the same rule.
  "declaration-block-no-shorthand-property-overrides": true, // Disallow shorthand properties that override related longhand properties within declaration blocks.
  "declaration-block-properties-order": propertiesOrder, // Specify the order of properties within declaration blocks.
  "declaration-block-semicolon-newline-after": "always", // Require a newline or disallow whitespace after the semicolons of declaration blocks.
  "declaration-block-semicolon-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the semicolons of declaration blocks.
  "declaration-block-semicolon-space-after": "always-single-line", // Require a single space or disallow whitespace after the semicolons of declaration blocks.
  "declaration-block-semicolon-space-before": "never", // Require a single space or disallow whitespace before the semicolons of declaration blocks.
  "declaration-block-single-line-max-declarations": 1, // Limit the number of declaration within single line declaration blocks.
  "declaration-block-trailing-semicolon": "always", // Require or disallow a trailing semicolon within declaration blocks.

  //
  // Block
  // ====================

  "block-closing-brace-newline-after": "always", // Require a newline or disallow whitespace after the closing brace of blocks.
  "block-closing-brace-newline-before": "always-multi-line", // Require a newline or disallow whitespace before the closing brace of blocks.
  "block-closing-brace-space-before": "always-single-line", // Require a single space or disallow whitespace before the closing brace of blocks.
  "block-opening-brace-newline-after": "always-multi-line", // Require a newline after the opening brace of blocks.
  "block-opening-brace-space-after": "always-single-line", // Require a single space or disallow whitespace after the opening brace of blocks.
  "block-opening-brace-space-before": "always", // Require a single space or disallow whitespace before the opening brace of blocks.

  //
  // Selector
  // ====================

  "selector-attribute-brackets-space-inside": "never", // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
  "selector-attribute-operator-space-after": "never", // Require a single space or disallow whitespace after operators within attribute selectors.
  "selector-attribute-operator-space-before": "never", // Require a single space or disallow whitespace before operators within attribute selectors.
  "selector-combinator-space-after": "always", // Require a single space or disallow whitespace after the combinators of selectors.
  "selector-combinator-space-before": "always", // Require a single space or disallow whitespace before the combinators of selectors.
  "selector-no-id": true, // Disallow id selectors.
  "selector-no-vendor-prefix": true, // Disallow vendor prefixes for selectors.
  "selector-pseudo-class-case": "lower", // Specify lowercase or uppercase for pseudo-class selectors.
  "selector-pseudo-class-no-unknown": true, // Disallow unknown pseudo-class selectors.
  "selector-pseudo-class-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
  "selector-pseudo-element-case": "lower", // Specify lowercase or uppercase for pseudo-element selectors.
  "selector-pseudo-element-colon-notation": "single", // Specify single or double colon notation for applicable pseudo-elements.
  "selector-pseudo-element-no-unknown": true, // Disallow unknown pseudo-element selectors.
  "selector-root-no-composition": true, // Disallow the composition of :root in selectors.
  "selector-type-case": "lower", // Specify lowercase or uppercase for type selector.
  "selector-type-no-unknown": true, // Disallow unknown type selectors.
  "selector-max-empty-lines": 0, // Limit the number of adjacent empty lines within selectors.

  //
  // Selector list
  // ====================

  "selector-list-comma-newline-after": "always", // Require a newline or disallow whitespace after the commas of selector lists.
  "selector-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of selector lists.
  "selector-list-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of selector lists.
  "selector-list-comma-space-before": "never", // Require a single space or disallow whitespace before the commas of selector lists.

  //
  // Root rule
  // ====================

  "root-no-standard-properties": true, // Disallow standard properties inside :root rules.

  //
  // Rule
  // ====================

  "rule-nested-empty-line-before": [ // Require or disallow an empty line before nested rules.
    "always",
    {
      except: ["first-nested"], // Reverse the primary option if the rule is the first in a block.
      ignore: ["after-comment"], // Ignore rules that come after a comment.
    },
  ],
  "rule-non-nested-empty-line-before": [ // Require or disallow an empty line before non-nested rules.
    "always",
    {
      ignore: ["after-comment"], // Ignore rules that come after a comment.
    },
  ],

  //
  // Media feature
  // ====================

  "media-feature-colon-space-after": "always", // Require a single space or disallow whitespace after the colon in media features.
  "media-feature-colon-space-before": "never", //  Require a single space or disallow whitespace before the colon in media features.
  "media-feature-name-no-vendor-prefix": true, //  Disallow vendor prefixes for media feature names.
  "media-feature-no-missing-punctuation": true, //  Disallow missing punctuation for non-boolean media features.
  "media-feature-range-operator-space-after": "always", //  Require a single space or disallow whitespace after the range operator in media features.
  "media-feature-range-operator-space-before": "always", //  Require a single space or disallow whitespace before the range operator in media features.
  "media-feature-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses within media features.

  //
  // Media query list
  // ====================

  "media-query-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of media query lists.
  "media-query-list-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of media query lists.
  "media-query-list-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of media query lists.
  "media-query-list-comma-space-before": "never", // Require a single space or disallow whitespace before the commas of media query lists.

  //
  // At-rule
  // ====================

  "at-rule-name-case": "lower", // Specify lowercase or uppercase for at-rules names.
  "at-rule-name-space-after": "always", // Require a single space after at-rule names.
  "at-rule-no-unknown": [
    true, // Disallow unknown at-rules.
    {
      "ignoreAtRules": [
        "include",
        "mixin",
      ],
    }
  ],
  "at-rule-no-vendor-prefix": true, // Disallow vendor prefixes for at-rules.
  "at-rule-semicolon-newline-after": "always", // Require a newline after the semicolon of at-rules.

  //
  // Stylelint disable comment
  // ====================

  "stylelint-disable-reason": "always-before", // Require a reason comment before or after stylelint-disable comments.

  //
  // Comment
  // ====================

  "comment-empty-line-before": [ // Require or disallow an empty line before comments.
    "always",
    {
      except: [
        "first-nested", // Reverse the primary option for comments that are nested and the first child of their parent node.
      ],
      ignore: [
        "stylelint-commands", // Ignore comments that deliver commands to stylelint, e.g. /* stylelint-disable color-no-hex */
      ],
    },
  ],
  "comment-whitespace-inside": "always", // Require or disallow whitespace on the inside of comment markers.

  //
  // General / Sheet
  // ====================

  "indentation": 2, // Specify indentation.
  "max-empty-lines": 1, // Limit the number of adjacent empty lines.
  "max-line-length": 120, // Limit the length of a line.
  "no-duplicate-selectors": true, // Disallow duplicate selectors.
  "no-empty-source": true, // Disallow empty sources.
  "no-eol-whitespace": true, // Disallow end-of-line whitespace.
  "no-extra-semicolons": true, // Disallow extra semicolons.
  "no-invalid-double-slash-comments": true, // Disallow double-slash comments (//...) which are not supported by CSS.
  "no-missing-end-of-source-newline": true, // Disallow missing end-of-source newlines.
  "no-unknown-animations": true, // Disallow animation names that do not correspond to a @keyframes declaration.
}

export default rules
