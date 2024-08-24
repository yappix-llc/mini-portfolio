import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
};

export default withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options
    // Specify the organization and project to upload source maps to
    org: "yappix-llc",
    project: "portfolio",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false,
}, {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
});