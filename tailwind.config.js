// Arquivo criado com as configurações da página do NativeWind

/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    // Ele vai procurar os arquivos com as extensões abaixo no caminho que passarmos.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  }