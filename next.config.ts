import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '**'
            }
        ]
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
