/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", // required for the canvas to work
      },
      webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }]; // required for the canvas to work
        return config;
      },
      basePath: "/portfolio",
      images: {
        unoptimized: true
      },
};

export default nextConfig;
