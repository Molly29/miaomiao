module.exports = {
    //开启代理服务器
    devServer : {
        proxy : {
            '/ajax':{
                target:'http://m.maoyan.com',
                changeOrigin:true,
               /*  pathRewrite:{
                    '^/api':''
                } */
            },
            '/apollo':{
                target:'https://i.maoyan.com',
                changeOrigin:true,
               /*  pathRewrite:{
                    '^/api':''
                } */
            },
        }
    }
}