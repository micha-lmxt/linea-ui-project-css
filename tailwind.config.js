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
      transparent: "transparent",
      primary:"#DB3B49",
			
      secondary:"#2BC2A4",
      secondary_dark:"#229C83",
      secondary_darker:"#145C4D",
      secondary_light:"#31DBBA",
      secondary_lighter:"#33E8C4",

      tertiary:"#C27C21",
      tertiary_light:"#DB8B25",
      tertiary_lighter:"#E89527",

      white: "#f1ede7",
      black: "#170e03",
      gray_light: "#d6c8b7",
      gray_dark: '#75480E'
	
    },
    fontFamily: {
      sans: ['Prompt', 'sans-serif'],
      serif: ['Sriracha', 'cursive']
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
