module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@theme': './src/theme',
        },
      },
    ],
    'react-native-reanimated/plugin', // ⚠️ MUST be last
  ],
};
