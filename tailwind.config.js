/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "blue" :"#00bcf1",
        "lightb" :"#002970",
        "lightsmile" :"#f5f5f5",
        "transhparentblue" :"#00afe3",
        "darknilla" : "#0f4a8a",
        "bgcolor" :"#f5f7fa"
      },
      screens : {
        "verysmall" :{'max' : "399px"},
        'small' : '400px',
        'medium' : '768px',
        'large' : {'max' : '1070px'}
      },
    },
  },
  plugins: [],
}

