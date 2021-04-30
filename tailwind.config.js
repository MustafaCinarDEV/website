const { resolve } = require("path")

module.exports = {
  darkMode: "class", // or 'media' or 'class'
  variants: {
    backgroundColor: [
      "dark"
    ],
  },
  borderColor: ["dark"],
  textColor: ["dark"],
  theme: {
    extend: {},
  },
  theme: {
    
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    opjectPosition: {
      bottom: 'bottom',
        center: 'center',
        left: 'left',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
       'center-bottom': 'center bottom'
    }
  },
}