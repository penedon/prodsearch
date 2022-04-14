module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    setupFiles: ["<rootDir>/tests/jest.init.js"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,vue}",
        "!**/node_modules/**"
    ],
    coverageReporters: [
        "html",
        "text-summary"
    ]
}
