// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

module.exports = {
    assets: ['./src/res/fonts']
}
