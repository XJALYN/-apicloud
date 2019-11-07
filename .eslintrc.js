module.exports = {
    "root": true,
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "extends": ["eslint:recommended", "plugin:vue/recommended"],
    "env": {
        "browser": true,
        "node": true
    }
    ,
    "plugins": ["flowtype", "vue"],
    "rules": {
        "line-break-style": [0, "error", "windows"],
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
    },


}