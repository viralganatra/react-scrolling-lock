module.exports = {
    'parser': 'babel-eslint',
    'extends': 'airbnb',
    'env': {
        'browser': true,
        'node': true,
        'jest/globals': true,
    },
    'globals': {
        'shallow': true,
        'mount': true,
        'render': true,
    },
    'rules': {
        'array-bracket-spacing': ['off'],
        'arrow-parens': ['error', 'always'],
        'class-methods-use-this': ['off'],
        'indent': ['error', 4],
        'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
        'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],

        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],

        'react/no-unused-prop-types': ['error', { 'skipShapeProps': true }],
        'react/require-default-props': ['warn'],
        'react/no-array-index-key': ['warn'],

        'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-no-bind': ['error'],

        'react/sort-comp': ['error', {
            'order': [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                'everything-else',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                '/^render.+$/',
                'render',
            ],
        }],
    },
    'plugins': [
        'babel',
        'react',
        'jest',
    ],
};
