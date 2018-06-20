module.exports = function(wallaby) {
    // Babel, jest-cli and some other modules are located under
    // react-scripts/node_modules, so need to let node.js know about it
    const path = require('path');
    process.env.NODE_PATH +=
        path.delimiter +
        path.join(__dirname, 'node_modules') +
        path.delimiter +
        path.join(__dirname, 'node_modules/react-scripts/node_modules');
    require('module').Module._initPaths();

    // Babel needs this
    process.env.NODE_ENV = 'development';

    return {
        files: [
            'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpeg|gif|png|svg)',
            '!src/**/*.test.js',
        ],

        tests: ['src/**/*.test.js'],

        env: {
            type: 'node',
            runner: 'node',
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: require('babel-core'),
                babelrc: true,
                presets: ['react-app', 'es2017', 'flow'],
            }),
        },

        testFramework: 'jest',
    };
};
