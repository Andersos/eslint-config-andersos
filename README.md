# eslint-config-andersos [![Build Status](https://travis-ci.org/Andersos/eslint-config-andersos.svg)](https://travis-ci.org/Andersos/eslint-config-andersos)

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

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.

## Publishing

```bash
Update CHANGELOG
$ npm version <patch | minor | major>
$ git push --tags origin master
$ npm publish
```
