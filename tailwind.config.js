module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px'
    },
    colors: {
      primary:"#37474f",
			
      secondary:"#9C8D5D",
      secondary_dark:"#5C5337",
      secondary_darker:"#82764E",
      secondary_light:"#A89965",
      secondary_lighter:"#E8D28B",

      tertiary:"#9C857C",
      tertiary_light:"#A88F85",
      tertiary_lighter:"#E8C5B7",

      white: "#EEEEEE",
      black: "#111111"
    },
    extend: {
      width: {
        '112': '28rem',
        '128': '32rem',
        '168': '42rem',
        '224': '56rem',
      }
    },
  },
  variants: {
    extend: {},
  },
}
