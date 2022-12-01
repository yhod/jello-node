module.exports = {
    'root' : true,
    'extends': [
        'eslint:recommended',
    ],
    'parserOptions': { 'ecmaVersion': 2020 },
    'plugins': ['promise', 'no-only-tests'],
    'rules': {
        'camelcase': ['error', {'allow': ['\\w+V\\d+_\\d+'], 'properties': 'never', 'ignoreDestructuring': true}],
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }],
        'no-console' : 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'comma-dangle': ['error', 'always-multiline'],

        'prefer-const': 'off',
        'lines-between-class-members': 'off',
        'no-prototype-builtins': 'off',
        'object-curly-spacing': 'off',
        'array-bracket-spacing': 'off',
        'quote-props': 'off',
        'quotes': ['error', 'single', {
            'allowTemplateLiterals': true,
            'avoidEscape': true,
        }],

        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': ['error', { 'exceptions': ['next'] }],
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',

        'promise/always-return': 'off',
        'promise/no-nesting': 'off',
        'promise/avoid-new': 'off',

        //'node/no-deprecated-api': 'warn',
        'no-only-tests/no-only-tests': 'error',
    },
    'env': {
        node: true,
        'jest': true,
    },
    'globals': {
        '_': false,
    },
}
