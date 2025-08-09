/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   compiler: {
    styledComponents: true,
    //removeConsole: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
