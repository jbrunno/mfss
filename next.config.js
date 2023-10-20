/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config) {
    config.experiments = { topLevelAwait: true }

    config.plugins.push(
      new NextFederationPlugin({
        name: "membership",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./pages/Membership": "./src/pages/index.tsx",
        },
        extraOptions: {
          exposePages: true,
        }
      }),
    );
    return config;
  },
}

module.exports = nextConfig
