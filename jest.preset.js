const nxPreset = require('@nrwl/jest/preset');

module.exports = {
    ...nxPreset,
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
