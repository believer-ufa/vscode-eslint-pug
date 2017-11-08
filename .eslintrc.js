module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module",
    },
    "plugins": [
        "pug"
    ],
    "rules": {
        "no-undef": 1,
        "no-unused-vars": 1,
        "indent": [ "error", 4, { "SwitchCase" : 1 } ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};