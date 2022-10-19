const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/:all*(svg|jpg|png)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=9999999999, must-revalidate",
                    },
                ],
            },
        ];
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    images: {
        domains: ["dummyimage.com"],
        minimumCacheTTL: 60,
    },
};

module.exports = nextConfig;
