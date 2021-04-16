
module.exports = {
  output: {
    path: ".",
    splitByMedia: false,
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  rules: {
    width: { $rem: [0, 24, .5], $pct: [100] },
    height: { $px: [50, 100] },
    padding: {
      edges: { $px: [[0, 50, 5]] }
    },
    margin: {
      edges: { $px: [-80, [0, 50, 5]] }
    },
    font: {
      size: { $px: [[8, 24, 2]] },
      family: { pri: "'Archivo Black', sans-serif", sec: "'Montserrat', sans-serif" },
    },
    border: {
      shorthand: { sep: "1px solid rgba(0,0,0,0.1)", frame: "10px solid #fff", },
      radius: { $px: [15], $pct: [50] },
    },
    background: {
      color: {         
          primary:"#37474f",
			
            secondary:"#9C8D5D",
            secondary_dark:"#5C5337",
            secondary_darker:"#82764E",
            secondary_light:"#A89965",
            secondary_lighter:"#E8D28B",

            tertiary:"#9C857C",
            tertiary_light:"#A88F85",
            tertiary_lighter:"#E8C5B7"}
    },
    shadow: {
      box: { air: "0px 4px 12px rgba(0, 0, 0, 0.08)", }
    },
    color: { 
        primary:"#37474f",
			
        secondary:"#9C8D5D",
        secondary_dark:"#5C5337",
        secondary_darker:"#82764E",
        secondary_light:"#A89965",
        secondary_lighter:"#E8D28B",

        tertiary:"#9C857C",
        tertiary_light:"#A88F85",
        tertiary_lighter:"#E8C5B7"
    },
  },
}