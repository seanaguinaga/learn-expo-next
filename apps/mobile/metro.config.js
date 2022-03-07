const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

const { withNxMetro } = require('@nrwl/expo');

const defaultConfig = getDefaultConfig(projectRoot);

module.exports = (async () => {
  defaultConfig.watchFolders = [workspaceRoot];
  defaultConfig.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];
  defaultConfig.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
    (ext) => ext !== 'svg'
  );
  defaultConfig.resolver.sourceExts.push('svg');
  return withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [],
  });
})();
