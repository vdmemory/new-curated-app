const nxPreset = require('@nrwl/jest/preset');

module.exports = {
    ...nxPreset,
    // testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    // transform: {
    //     '^.+\\.(ts|js|html)$': 'ts-jest',
    // },
    // resolver: '@nrwl/jest/plugins/resolver',
    // moduleFileExtensions: ['ts', 'js', 'html'],
    // moduleNameMapper: {
    //     '^.+\\.svg$': `${jestHelpersDir}/svgrMock.js`,
    //     '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${jestHelpersDir}/fileMock.js`,
    // },
    coverageReporters: ['text'],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};
