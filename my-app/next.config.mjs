/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kalinga-university.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
