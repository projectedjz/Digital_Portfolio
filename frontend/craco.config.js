const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env }) => {
      
      // Only disable React Refresh for production builds
      if (env === 'production') {
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          const pluginName = plugin.constructor.name;
          return !(
            pluginName === 'HotModuleReplacementPlugin' || 
            pluginName === 'ReactRefreshPlugin' ||
            pluginName.includes('ReactRefresh')
          );
        });
      }
      
      return webpackConfig;
    },
  },
};