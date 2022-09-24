const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const path = require('path')
// 配置信息
module.exports = {
    entry: "./src/index.ts",
    // output: './dist',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        environment:{
            arrowFunction:false
        }
    },
    mode:'production',
    // webpack打包使用的模块
    module:{
     rules: [
        {
            test:/\.ts$/,//生效的文件 正则规则
            use:[
                //加载器从后往前加载
                {
                    loader:'babel-loader',
                    // 设置babel
                    options:{
                        //设置预定环境
                        presets:[
                            [
                                "@babel/preset-env",
                                {
                                    //要兼容的目标浏览器
                                    targets:{
                                        // 'chrome':'88',
                                        "ie":"11",
                                        // "firefox":'43'
                                    },
                                    //指定corejs版本 promise等新语法
                                    "corejs":'3',
                                    //按需加载 
                                    "useBuiltIns":"usage",
                                }
                            ],
                        ]
                    }

                },
                'ts-loader'],//先加载
            exclude:/node_modules/,
        }
     ]   
    },
    // 自动加载html 并引入output
    plugins:[
        new HtmlWebpackPlugin({
            // title:'custom title'
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),//执行清空dist
    ],
    resolve:{
        //那些文件可以作为模块
        extensions:[".ts",".js"]
    }

}