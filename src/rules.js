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
  // "color-no-hex": true, // Disallow hex colors.
  "color-no-invalid-hex": true, // Disallow invalid hex colors.

  //
  // Font
  // ====================

  "font-family-name-quotes": "always-where-recommended", // Specify whether or not quotation marks should be used around font family names.
  // "font-weight-notation": "", // Require numeric or named (where possible) font-weight values.

  //
  // Function
  // ====================

  // "function-blacklist": [], // Specify a blacklist of disallowed functions.
  "function-calc-no-unspaced-operator": true, // Disallow an unspaced operator within calc functions.
  "function-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of functions.
  "function-comma-newline-before": "never-multi-line", // Require a newline or disallow whitespace before the commas of functions.
  "function-comma-space-after": "always-single-line", // Require a single space or disallow whitespace after the commas of functions.
  "function-comma-space-before": "never-single-line", // Require a single space or disallow whitespace before the commas of functions.
  "function-linear-gradient-no-nonstandard-direction": true, // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
  "function-max-empty-lines": 0, // Limit the number of adjacent empty lines within functions.
  // "function-name-case": "lower", // Specify lowercase or uppercase for function names.
  "function-parentheses-newline-inside": "always-multi-line", // Require a newline or disallow whitespace on the inside of the parentheses of functions.
  "function-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses of functions.
  // "function-url-data-uris": "", // Require or disallow data URIs for urls.
  "function-url-quotes": "always", // Require or disallow quotes for urls.
  // "function-whitelist": [], // Specify a whitelist of allowed functions.
  // "function-whitespace-after": "", // Require or disallow whitespace after functions.

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
  // Time
  // ====================

  // "time-no-imperceptible": true, // Disallow animation and transition less than or equal to 100ms.

  //
  // Unit
  // ====================

  "unit-blacklist": [ "in", "cm", "mm" ], // Specify a blacklist of disallowed units.
  "unit-case": "lower", // Specify lowercase or uppercase for units.
  "unit-no-unknown": true, // Disallow unknown units.
  // "unit-whitelist": [], // Specify a whitelist of allowed units.

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
  // Custom property
  // ====================

  // "custom-property-no-outside-root": true, // Disallow custom properties outside of :root rules.
  // "custom-property-pattern": /foo-.+/, // Specify a pattern for custom properties.

  //
  // Shorthand property
  // ====================

  "shorthand-property-no-redundant-values": true, // Disallow redundant values in shorthand properties.

  //
  // Property
  // ====================

  // "property-blacklist": [], // Specify a blacklist of disallowed properties.
  "property-case": "lower", // Specify lowercase or uppercase for properties.
  "property-no-vendor-prefix": true, // Disallow vendor prefixes for properties.
  // "property-whitelist": [], // Specify a whitelist of allowed properties.

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
  // "declaration-no-important": true, // Disallow !important within declarations.
  // "declaration-property-unit-blacklist": [], // Specify a blacklist of disallowed property and unit pairs within declarations.
  // "declaration-property-unit-whitelist": [], // Specify a whitelist of allowed property and unit pairs within declarations.
  // "declaration-property-value-blacklist": [], // Specify a blacklist of disallowed property and value pairs within declarations.
  // "declaration-property-value-whitelist": [], // Specify a whitelist of allowed property and value pairs within declarations.

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
  "block-closing-brace-space-after": "always-single-line", // Require a single space or disallow whitespace after the closing brace of blocks.
  "block-closing-brace-space-before": "always-single-line", // Require a single space or disallow whitespace before the closing brace of blocks.
  // "block-no-empty": true, // Disallow empty blocks.
  // "block-no-single-line": true, // Disallow single-line blocks.
  "block-opening-brace-newline-after": "always-multi-line", // Require a newline after the opening brace of blocks.
  // "block-opening-brace-newline-before": "", // Require a newline or disallow whitespace before the opening brace of blocks.
  "block-opening-brace-space-after": "always-single-line", // Require a single space or disallow whitespace after the opening brace of blocks.
  "block-opening-brace-space-before": "always", // Require a single space or disallow whitespace before the opening brace of blocks.

  //
  // Selector
  // ====================

  "selector-attribute-brackets-space-inside": "never", // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
  // "selector-attribute-operator-blacklist": [], // Specify a blacklist of disallowed attribute operators.
  "selector-attribute-operator-space-after": "never", // Require a single space or disallow whitespace after operators within attribute selectors.
  "selector-attribute-operator-space-before": "never", // Require a single space or disallow whitespace before operators within attribute selectors.
  // "selector-attribute-operator-whitelist": [], // Specify a whitelist of allowed attribute operators.
  // "selector-class-pattern": "", // Specify a pattern for class selectors.
  "selector-combinator-space-after": "always", // Require a single space or disallow whitespace after the combinators of selectors.
  "selector-combinator-space-before": "always", // Require a single space or disallow whitespace before the combinators of selectors.
  // "selector-id-pattern": "", // Specify a pattern for id selectors.
  // "selector-max-compound-selectors": 4, // Limit the number of compound selectors in a selector.
  // "selector-max-specificity": "", // Limit the specificity of selectors.
  // "selector-no-attribute": true, // Disallow attribute selectors.
  // "selector-no-combinator": true, // Disallow combinators in selectors.
  "selector-no-id": true, // Disallow id selectors.
  // "selector-no-qualifying-type": true, // Disallow qualifying a selector by type.
  // "selector-no-type": true, // Disallow type selectors.
  // "selector-no-universal": true, // Disallow the universal selector.
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

  "selector-list-comma-newline-after": "always-multi-line", // Require a newline or disallow whitespace after the commas of selector lists.
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

  //
  // Custom media
  // ====================

  // "custom-media-pattern": /foo-.+/, // Specify a pattern for custom media query names.

  //
  // Media query
  // ====================

  "media-query-parentheses-space-inside": "never", // Require a single space or disallow whitespace on the inside of the parentheses within media queries.

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

  // "at-rule-blacklist": [], // Specify a blacklist of disallowed at-rules.
  // "at-rule-empty-line-before": '', // Require or disallow an empty line before at-rules.
  "at-rule-name-case": "lower", // Specify lowercase or uppercase for at-rules names.
  // "at-rule-name-newline-after": "", // Require a newline after at-rule names.
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
  // "at-rule-whitelist": [], // Specify a whitelist of allowed at-rules.

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
  // "comment-word-blacklist": [], // Specify a blacklist of disallowed words within comments.

  //
  // General / Sheet
  // ====================

  "indentation": 2, // Specify indentation.
  "max-empty-lines": 1, // Limit the number of adjacent empty lines.
  "max-line-length": 120, // Limit the length of a line.
  // "max-nesting-depth": 2, // Limit the depth of nesting.
  // "no-browser-hacks": true, // Disallow browser hacks that are irrelevant to the browsers you are targeting.
  // "no-descending-specificity": true, // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  "no-duplicate-selectors": true, // Disallow duplicate selectors.
  "no-empty-source": true, // Disallow empty sources.
  "no-eol-whitespace": true, // Disallow end-of-line whitespace.
  "no-extra-semicolons": true, // Disallow extra semicolons.
  // "no-indistinguishable-colors": true, // Disallow colors that are suspiciously close to being identical.
  "no-invalid-double-slash-comments": true, // Disallow double-slash comments (//...) which are not supported by CSS.
  "no-missing-eof-newline": true, // Disallow missing end-of-file newline.
  "no-unknown-animations": true, // Disallow animation names that do not correspond to a @keyframes declaration.
  // "no-unsupported-browser-features": true, // Disallow features that are unsupported by the browsers that you are targeting.
}

export default rules
