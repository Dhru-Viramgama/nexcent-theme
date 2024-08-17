/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/ZWt875h/ezgif-com-resize-1.jpg',
      },
    ],
  },
};

export default nextConfig;
