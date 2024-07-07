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
      output: "export",  // <=== enables static exports
      reactStrictMode: true,
};

export default nextConfig;
