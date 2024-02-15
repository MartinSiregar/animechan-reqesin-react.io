// config-overrides.js
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = function override(config, env) {
  // Add AntdDayjsWebpackPlugin to optimize Ant Design's date handling
  config.plugins.push(new AntdDayjsWebpackPlugin());

  // Add CSS loader for Ant Design
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  return config;
};
