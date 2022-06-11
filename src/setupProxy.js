// setupProxy.js
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{
            target:"http://kitcapstone.iptime.org:3000",
            changeOrigin:true,
        })
    )
}