const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
      unoptimized: true,
  },
};

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
nextConfig,
{
  org: "trajector-fp",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
}
);
