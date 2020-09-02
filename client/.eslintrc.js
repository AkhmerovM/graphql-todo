module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        indent: ['error', 4],
        'import/prefer-default-export': 0,
        'global-require': 0,
        'react/jsx-indent': ['error', 4],
        'no-underscore-dangle': 0,
        'react/prop-types': 0,
        'max-len': ['error', 200],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
