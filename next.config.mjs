/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // source : 유저가 진입할 path
        // destination : 유저가 이동할 path
        source: "/api/yunyeji/items/:path",
        destination:
          "https://assignment-todolist-api.vercel.app/api/yunyeji/items/:path",
      },
      {
        // source : 유저가 진입할 path
        // destination : 유저가 이동할 path
        source: "/api/yunyeji/items",
        destination:
          "https://assignment-todolist-api.vercel.app/api/yunyeji/items",
      },
    ];
  },
};

export default nextConfig;
