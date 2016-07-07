# stylelint-config-elao

> Elao CSS Stylelint configuration

A configurable [Stylelint](http://stylelint.io/) configuration used in Elao projects.

## Installation

The config require the `stylelint` package.

```console
$ npm install --save-dev stylelint stylelint-config-elao
```

## Usage

Create a `.stylelintrc` file with this following configuration:

```json
{
  "extends": "stylelint-config-elao"
}
```

Then run the following command:
```console
$ stylelint "path/to/**/*.scss" --syntax scss -f verbose
```

### Extending the config

Add a `"rules"` key to your config and add your overrides rules there.

For example, to change the indentation from 2 spaces to 4 and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-elao",
  "rules": {
    "indentation": 4,
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
