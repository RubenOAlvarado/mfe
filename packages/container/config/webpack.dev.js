const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: ['react', 'react-dom'],
        }),
    ]
}

module.exports = merge(common, devConfig);