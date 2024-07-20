/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // 모바일 퍼스트 버전
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "744px",
      // => @media (min-width: 744px) { ... }

      lg: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      slate: {
        900: "#0F172A",
        800: "#1E293B",
        500: "#64748B",
        400: "#94A3B8",
        300: "#CBD5E1",
        200: "#E2E8F0",
        100: "#F1F5F9",
      },
      violet: {
        600: "#7C3AED",
        100: "#EDE9FE",
      },
      rose: "#F43F5E",
      lime: "#BEF264",
      amber: "#92400E",
      dddd: "#3cff00",
    },
  },
  plugins: [],
};
