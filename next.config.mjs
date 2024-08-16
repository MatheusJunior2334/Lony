/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: ''
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/sobre',
                destination: '/about'
            },
            {
                source: '/auth/registrar',
                destination: '/auth/register'
            },
            {
                source: '/loja',
                destination: '/shop'
            }
        ]
    }
};

export default nextConfig;
