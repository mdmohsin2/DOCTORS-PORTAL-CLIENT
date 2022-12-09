
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       doctortheme: {
  //         primary: '#0FCFEC',
  //         secondary: '#19D3AE',
  //         accent: "#3A4256",
  //         neutral: "#3D4451",
  //         'bg-100': '#FFF'
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


// daisyui: {
//   themes: [
//     {
//       doctortheme: {
//         primary: '#0FCFEC',
//         secondary: '#19D3AE',
//         accent: "#3A4256",
//         neutral: "#3D4451",
//         'bg-100': '#FFF'
//       }
//     }
//   ]
// },