/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"],
  },

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
        source: "/api/yunyeji/items",
        destination:
          "https://assignment-todolist-api.vercel.app/api/yunyeji/items",
      },
      {
        source: "/api/yunyeji/images/upload",
        destination:
          "https://assignment-todolist-api.vercel.app/api/yunyeji/images/upload",
      },
    ];
  },
};

export default nextConfig;
