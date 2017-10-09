module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jquery": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-unused-vars": ["error"],
        "react/jsx-uses-vars": [2],
        "linebreak-style": [0],
        "no-console": [0]
    },
    "globals": {
        "Materialize": true,
        "React": true
    }
};