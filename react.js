module.exports = {
  'plugins': [
    'react'                          // https://github.com/yannickcr/eslint-plugin-react
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  rules: {
    'react/display-name': 2,                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/jsx-boolean-value': 2,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-closing-bracket-location': 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-curly-spacing': 0,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-indent-props': 0,             // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-max-props-per-line': 0,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-no-duplicate-props': 2,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-literals': 0,              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-undef': 2,                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-quotes': [2, 'double'],       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
    'react/jsx-sort-prop-types': 2,          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    'react/jsx-sort-props': 2,               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-uses-react': 2,               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-vars': 2,                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/no-danger': 2,                    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-did-mount-set-state': [2, 'allow-in-func'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-update-set-state': 2,      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-multi-comp': 2,                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-set-state': 0,                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-unknown-property': 2,          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/prop-types': 2,                   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/react-in-jsx-scope': 2,           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/require-extension': 0,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
    'react/self-closing-comp': 2,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/wrap-multilines': 2,              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    'react/sort-comp': 2                     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  }
};
