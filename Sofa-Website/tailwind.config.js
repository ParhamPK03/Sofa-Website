/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxx": "1334px",
        "xxxx": "1091px",
        "xxs": "971px",
        "xx": "515px",
        "xs": "480px",

      },
      backgroundImage: {
        "Body-Room-Img" : "url(/src/assets/Images/Body/Room.jpg)",
        "Body-LivingRoom-Img" : "url(/src/assets/Images/Body/LivingRoom.jpg)"
      },
    },
  },
  plugins: [],
}

 