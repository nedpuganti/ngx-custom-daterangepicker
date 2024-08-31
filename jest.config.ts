/* eslint-disable */
export default {
  displayName: 'ngx-custom-daterangepicker',
  preset: './jest-preset.js',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/ngx-custom-daterangepicker',
  setupFiles: ['<rootDir>/global.mock.js']
};
