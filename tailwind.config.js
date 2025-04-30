module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c9eed",
        secondary: "#e5edff",
        darkgray: "#21293B",
      },
    },
  },
  plugins: [],
  module: {
    rules: [
      // 다른 로더 설정
    ],
  },
  // devtool을 false로 설정하여 소스 맵을 비활성화
  devtool: false, // 소스 맵을 아예 끕니다
};
