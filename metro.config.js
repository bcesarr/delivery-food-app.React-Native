// Arquivo criado com as configurações da página do NativeWind

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// Passando o caminho/local do arquivo global.css
module.exports = withNativeWind(config, { input: './src/styles/global.css' })