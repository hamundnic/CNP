const PROXY_CONFIG = [{
    context: [
        "/*"
    ],
    target: "http://localhost:3000",
    secure: false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": { "^/*": "" }
}]

module.exports = PROXY_CONFIG;