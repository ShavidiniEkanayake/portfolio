const path = require("path")
/** @type {import('react').ReactConfig} */
const reactConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "",
  // webpack: (config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@/*': path.resolve(__dirname, 'src/*'),
  //   }
  //   return config
  // },
};

module.exports = reactConfig;