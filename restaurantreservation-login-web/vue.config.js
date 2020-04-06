module.exports = {
    devServer: {
        proxy: {
            '/session': {
                target: 'http://localhost:8081' // login server
            },
            '/loginUser': {
                target: 'http://localhost:8081' // login server
            },
        }
    }
}