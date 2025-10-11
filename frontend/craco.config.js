// Load configuration from environment or config file
const path = require('path');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env }) => {
      
      // Completely remove React Refresh for both development and production
      webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
        return !(plugin.constructor.name === 'HotModuleReplacementPlugin' || 
                plugin.constructor.name === 'ReactRefreshPlugin');
      });
      
      // Remove React Refresh from babel configuration
      if (webpackConfig.module && webpackConfig.module.rules) {
        webpackConfig.module.rules.forEach(rule => {
          if (rule.oneOf) {
            rule.oneOf.forEach(oneOfRule => {
              if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                oneOfRule.use.forEach(useItem => {
                  if (useItem.loader && useItem.loader.includes('babel-loader') && useItem.options) {
                    // Remove react-refresh babel plugin
                    if (useItem.options.plugins) {
                      useItem.options.plugins = useItem.options.plugins.filter(plugin => {
                        if (typeof plugin === 'string') {
                          return !plugin.includes('react-refresh');
                        }
                        if (Array.isArray(plugin)) {
                          return !plugin[0].includes('react-refresh');
                        }
                        return true;
                      });
                    }
                    
                    // Also check presets for react-refresh
                    if (useItem.options.presets) {
                      useItem.options.presets = useItem.options.presets.map(preset => {
                        if (Array.isArray(preset) && preset[0].includes('react-app')) {
                          // Disable runtime in react-app preset
                          return [preset[0], { ...preset[1], runtime: undefined }];
                        }
                        return preset;
                      });
                    }
                  }
                });
              }
            });
          }
        });
      }
      
      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }
      
      return webpackConfig;
    },
  },
};