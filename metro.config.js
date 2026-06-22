/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    // Modern Redux exports CommonJS (.cjs) files
    // Added 'cjs' here because RN 0.66 Metro does not support it by default
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs'],
  },
};
