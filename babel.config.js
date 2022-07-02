module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-typescript", "babel-preset-expo"],
    plugins: ['react-native-reanimated/plugin'],
  };
};
