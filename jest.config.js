const { getJestProjects } = require('@nrwl/jest');

module.exports = {
    projects: getJestProjects(),
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75,
        },
    },
};
