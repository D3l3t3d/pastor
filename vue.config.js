module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        https: false,
        hotOnly: false,
        proxy: {
            '/.netlify': {
                target: 'http://localhost:9000',
                pathRewrite: {'^/.netlify/functions': ''}
            }
        }
    },
    baseUrl: process.env.BASE_URL
};
