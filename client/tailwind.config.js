/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/Header/Header.js",
    "./components/Layout/Layout.js",
    "./components/Featured/Featured.js",
    "./components/Blogs/Blogs.js",
    "./components/Sidebar/Sidebar.js",
    "./pages/index.js",
    "./pages/write.js",
    "./pages/blog/[id].js",
    "./pages/login.js",
    "./pages/register.js",
    "./pages/profile.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
