module.exports = {
  preset: 'react-native',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  },

  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@standard-schema)'],
};
