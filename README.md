# eslint-config-andersos [![Build Status](https://travis-ci.org/Andersos/eslint-config-andersos.svg)](https://travis-ci.org/Andersos/eslint-config-andersos) [![Dependency Status](https://david-dm.org/Andersos/eslint-config-andersos.svg)](https://david-dm.org/Andersos/eslint-config-andersos) [![devDependency Status](https://david-dm.org/Andersos/eslint-config-andersos/dev-status.svg)](https://david-dm.org/Andersos/eslint-config-andersos#info=devDependencies)

[ESLint](http://eslint.org/) config for @andersos

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-andersos
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "andersos"
}
```

For React.js rules you can add
```json
{
    "extends": [
      "andersos",
      "andersos/react"
    ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.

## Publishing

```bash
Update CHANGELOG
$ npm version <patch | minor | major>
$ npm publish
```
