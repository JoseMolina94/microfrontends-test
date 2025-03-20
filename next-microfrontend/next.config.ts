import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com']
  },

  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "nextjsHost",
          remotes: {
            angularApp: `angularApp@http://localhost:3001/remoteEntry.js`,
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
          extraOptions: {}
        }),
      );
    }

    return config;
  },
};

export default nextConfig;