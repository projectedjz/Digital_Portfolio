const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env }) => {
      
      // Remove all React Refresh and HMR plugins for both dev and production
      webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
        const pluginName = plugin.constructor.name;
        return !(
          pluginName === 'HotModuleReplacementPlugin' || 
          pluginName === 'ReactRefreshPlugin' ||
          pluginName.includes('ReactRefresh')
        );
      });

      // Configure Babel to use production JSX runtime
      if (webpackConfig.module && webpackConfig.module.rules) {
        webpackConfig.module.rules.forEach(rule => {
          if (rule.oneOf) {
            rule.oneOf.forEach(oneOfRule => {
              if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                oneOfRule.use.forEach(useItem => {
                  if (useItem.loader && useItem.loader.includes('babel-loader')) {
                    if (useItem.options) {
                      // Remove react-refresh plugins
                      if (useItem.options.plugins) {
                        useItem.options.plugins = useItem.options.plugins.filter(plugin => {
                          const pluginName = Array.isArray(plugin) ? plugin[0] : plugin;
                          return !pluginName?.includes('react-refresh');
                        });
                      }
                      
                      // Configure React preset for production JSX
                      if (useItem.options.presets) {
                        useItem.options.presets = useItem.options.presets.map(preset => {
                          if (Array.isArray(preset)) {
                            const [presetName, presetOptions] = preset;
                            if (presetName?.includes('react-app') || presetName?.includes('@babel/preset-react')) {
                              return [presetName, {
                                ...presetOptions,
                                runtime: 'automatic',
                                development: false,
                                importSource: 'react'
                              }];
                            }
                          }
                          return preset;
                        });
                      }
                    }
                  }
                });
              }
            });
          }
        });
      }
      
      // Optimize watch options for development
      if (env === 'development') {
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
          ],
        };
      }
      
      return webpackConfig;
    },
  },
};