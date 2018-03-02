const WebpackMaker = require('cultureamp-front-end-scripts/webpack-config-maker');

const webpackMaker = new WebpackMaker();

webpackMaker.registerPreset(name, fn);
webpackMaker.registerLoader(name, opts);
webpackMaker.addRule(opts);
webpackMaker.usePreset([preset, preset2]);
webpackMaker.modifyLoader(name, opts);

webpackMaker.registerLoader('reason', {
  loader: 'bs-loader',
  options: {
    module: 'amd',
  },
});

webpackMaker.modifyLoader('reason', {
  options: {
    module: 'es6',
  },
});

const caReasonPreset = wm => {
  wm.addRule({
    extensions: ['re', 'ml'],
    include: ['reason-react-stuff'],
    exclude: ['reason-react-stuff/docs'],
    loaders: wm.loaders['reason'],
  });
};

const standardPack = [
  babelReactPreset,
  elmPreset,
  sassModulesPreset,
  svgIconsPreset,
];

webpackMaker.usePresets([...standardPack, caReasonPreset]);

module.exports = webpackMaker.generateWebpackConfig();
