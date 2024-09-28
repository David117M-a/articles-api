const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app.js', // Path to main file
    target: 'node', // Target Node.js environment
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, 'dist'), // Path to output folder
        libraryTarget: 'commonjs2', // Important for Node.js
    },
    resolve: {
        extensions: ['.js'], // Resolve .js extensions
    },
    module: {
        rules: [{
            test: /\.js$/, // For JavaScript files
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', // Use Babel loader
                options: {
                    presets: ['@babel/preset-env'], // Set environment
                },
            },
        }, ],
    },
    externals: {
        tedious: 'commonjs tedious' // This tells Webpack to treat `tedious` as an external dependency
    }
};