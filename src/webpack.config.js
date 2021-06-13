const path = require("path")

module.exports = {
    //entry,mode, output, result, module, devtool, devServer -- there are more porperties that we can use, however these are what we are going to use
    entry: "./src/index.js" ,// where we begin building dependency graph 
    mode: "development", // you can have different webpack configs for different environments
    // resolve is this sense means how webpack is locating the modules use in your application
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    }, //this will allow us to leave off the extensions when importing
    output: {
        filename: "bundle.js", // what the name of our newly bundle file shoulb be
        path: path.join(__dirname, "public") //where the bundled fule should be emitted
    },
    devtool: "source-map", //tjos wo;; a;;pw is tp ise spirce,a[s om pir devTools console

    modle: {
        //this is where webpack will determine which loaders to use
        rules: [
            {
                loader: "babel-loader",
                test: /\.(js|jsx)$/, //telling webpack to transform our files ending in .js or jsx, except
                exclode: /(node_modules|bower_components)/,
                options: {
                    presets:["babel/env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}