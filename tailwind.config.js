/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  {
    'gokart-image':'url("./images/gokart.jpg")'
    },
    colors: {
      'meetup-red':'#E34040',
      "colors": {
        "transparent": "transparent",
        "white": "#ffffff",
        "black": "#000000",
        "gray": {

          "800": "#252f3f",
          
        },
        "cool-gray": {
          "50": "#fbfdfe",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cfd8e3",
          "400": "#97a6ba",
          "500": "#64748b",
          "600": "#475569",
          "700": "#364152",
          "800": "#27303f",
          "900": "#1a202e"
        },
        "red": {
          "50": "#fdf2f2",
          "100": "#fde8e8",
          "200": "#fbd5d5",
          "300": "#f8b4b4",
          "400": "#f98080",
          "500": "#f05252",
          "600": "#e02424",
          "700": "#c81e1e",
          "800": "#9b1c1c",
          "900": "#771d1d"
        },
        "orange": {
          "50": "#fff8f1",
          "100": "#feecdc",
          "200": "#fcd9bd",
          "300": "#fdba8c",
          "400": "#ff8a4c",
          "500": "#ff5a1f",
          "600": "#d03801",
          "700": "#b43403",
          "800": "#8a2c0d",
          "900": "#771d1d"
        },
        "yellow": {
          "50": "#fdfdea",
          "100": "#fdf6b2",
          "200": "#fce96a",
          "300": "#faca15",
          "400": "#e3a008",
          "500": "#c27803",
          "600": "#9f580a",
          "700": "#8e4b10",
          "800": "#723b13",
          "900": "#633112"
        },
        "green": {
          "50": "#f3faf7",
          "100": "#def7ec",
          "200": "#bcf0da",
          "300": "#84e1bc",
          "400": "#31c48d",
          "500": "#0e9f6e",
          "600": "#057a55",
          "700": "#046c4e",
          "800": "#03543f",
          "900": "#014737"
        },
        "teal": {
          "50": "#edfafa",
          "100": "#d5f5f6",
          "200": "#afecef",
          "300": "#7edce2",
          "400": "#16bdca",
          "500": "#0694a2",
          "600": "#047481",
          "700": "#036672",
          "800": "#05505c",
          "900": "#014451"
        },
        "blue": {
          "50": "#ebf5ff",
          "100": "#e1effe",
          "200": "#c3ddfd",
          "300": "#a4cafe",
          "400": "#76a9fa",
          "500": "#3f83f8",
          "600": "#1c64f2",
          "700": "#1a56db",
          "800": "#1e429f",
          "900": "#233876"
        },
        "indigo": {
          "50": "#f0f5ff",
          "100": "#e5edff",
          "200": "#cddbfe",
          "300": "#b4c6fc",
          "400": "#8da2fb",
          "500": "#6875f5",
          "600": "#5850ec",
          "700": "#5145cd",
          "800": "#42389d",
          "900": "#362f78"
        },
        "purple": {
          "50": "#f6f5ff",
          "100": "#edebfe",
          "200": "#dcd7fe",
          "300": "#cabffd",
          "400": "#ac94fa",
          "500": "#9061f9",
          "600": "#7e3af2",
          "700": "#6c2bd9",
          "800": "#5521b5",
          "900": "#4a1d96"
        },
        "pink": {
          "50": "#fdf2f8",
          "100": "#fce8f3",
          "200": "#fad1e8",
          "300": "#f8b4d9",
          "400": "#f17eb8",
          "500": "#e74694",
          "600": "#d61f69",
          "700": "#bf125d",
          "800": "#99154b",
          "900": "#751a3d"
        },
        "width": {
          "0": "0",
          "1": "0.25rem",
          "2": "0.5rem",
          "3": "0.75rem",
          "4": "1rem",
          "5": "1.25rem",
          "6": "1.5rem",
          "7": "1.75rem",
          "8": "2rem",
          "9": "2.25rem",
          "10": "2.5rem",
          "11": "2.75rem",
          "12": "3rem",
          "13": "3.25rem",
          "14": "3.5rem",
          "15": "3.75rem",
          "16": "4rem",
          "20": "5rem",
          "24": "6rem",
          "28": "7rem",
          "32": "8rem",
          "36": "9rem",
          "40": "10rem",
          "48": "12rem",
          "56": "14rem",
          "60": "15rem",
          "64": "16rem",
          "72": "18rem",
          "80": "20rem",
          "96": "24rem",
          "auto": "auto",
          "px": "1px",
          "0.5": "0.125rem",
          "1.5": "0.375rem",
          "2.5": "0.625rem",
          "3.5": "0.875rem",
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "full": "100%",
          "screen": "100vw"
        },
        "zIndex": {
          "0": "0",
          "10": "10",
          "20": "20",
          "30": "30",
          "40": "40",
          "50": "50",
          "auto": "auto"
        },
        "gap": {
          "0": "0",
          "1": "0.25rem",
          "2": "0.5rem",
          "3": "0.75rem",
          "4": "1rem",
          "5": "1.25rem",
          "6": "1.5rem",
          "7": "1.75rem",
          "8": "2rem",
          "9": "2.25rem",
          "10": "2.5rem",
          "11": "2.75rem",
          "12": "3rem",
          "13": "3.25rem",
          "14": "3.5rem",
          "15": "3.75rem",
          "16": "4rem",
          "20": "5rem",
          "24": "6rem",
          "28": "7rem",
          "32": "8rem",
          "36": "9rem",
          "40": "10rem",
          "48": "12rem",
          "56": "14rem",
          "60": "15rem",
          "64": "16rem",
          "72": "18rem",
          "80": "20rem",
          "96": "24rem",
          "px": "1px",
          "0.5": "0.125rem",
          "1.5": "0.375rem",
          "2.5": "0.625rem",
          "3.5": "0.875rem",
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "full": "100%"
        },
        "gridTemplateColumns": {
          "1": "repeat(1, minmax(0, 1fr))",
          "2": "repeat(2, minmax(0, 1fr))",
          "3": "repeat(3, minmax(0, 1fr))",
          "4": "repeat(4, minmax(0, 1fr))",
          "5": "repeat(5, minmax(0, 1fr))",
          "6": "repeat(6, minmax(0, 1fr))",
          "7": "repeat(7, minmax(0, 1fr))",
          "8": "repeat(8, minmax(0, 1fr))",
          "9": "repeat(9, minmax(0, 1fr))",
          "10": "repeat(10, minmax(0, 1fr))",
          "11": "repeat(11, minmax(0, 1fr))",
          "12": "repeat(12, minmax(0, 1fr))",
          "none": "none"
        },
        "gridColumn": {
          "auto": "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6",
          "span-7": "span 7 / span 7",
          "span-8": "span 8 / span 8",
          "span-9": "span 9 / span 9",
          "span-10": "span 10 / span 10",
          "span-11": "span 11 / span 11",
          "span-12": "span 12 / span 12"
        },
        "gridColumnStart": {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "8": "8",
          "9": "9",
          "10": "10",
          "11": "11",
          "12": "12",
          "13": "13",
          "auto": "auto"
        },
        "gridColumnEnd": {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "8": "8",
          "9": "9",
          "10": "10",
          "11": "11",
          "12": "12",
          "13": "13",
          "auto": "auto"
        },
        "gridTemplateRows": {
          "1": "repeat(1, minmax(0, 1fr))",
          "2": "repeat(2, minmax(0, 1fr))",
          "3": "repeat(3, minmax(0, 1fr))",
          "4": "repeat(4, minmax(0, 1fr))",
          "5": "repeat(5, minmax(0, 1fr))",
          "6": "repeat(6, minmax(0, 1fr))",
          "none": "none"
        },
        "gridRow": {
          "auto": "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6"
        },
        "gridRowStart": {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "auto": "auto"
        },
        "gridRowEnd": {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "auto": "auto"
        },
        "transformOrigin": {
          "center": "center",
          "top": "top",
          "top-right": "top right",
          "right": "right",
          "bottom-right": "bottom right",
          "bottom": "bottom",
          "bottom-left": "bottom left",
          "left": "left",
          "top-left": "top left"
        },
        "scale": {
          "0": "0",
          "50": ".5",
          "75": ".75",
          "90": ".9",
          "95": ".95",
          "100": "1",
          "105": "1.05",
          "110": "1.1",
          "125": "1.25",
          "150": "1.5"
        },
        "rotate": {
          "0": "0",
          "45": "45deg",
          "90": "90deg",
          "180": "180deg",
          "-180": "-180deg",
          "-90": "-90deg",
          "-45": "-45deg"
        },
        "translate": {
          "0": "0",
          "1": "0.25rem",
          "2": "0.5rem",
          "3": "0.75rem",
          "4": "1rem",
          "5": "1.25rem",
          "6": "1.5rem",
          "7": "1.75rem",
          "8": "2rem",
          "9": "2.25rem",
          "10": "2.5rem",
          "11": "2.75rem",
          "12": "3rem",
          "13": "3.25rem",
          "14": "3.5rem",
          "15": "3.75rem",
          "16": "4rem",
          "20": "5rem",
          "24": "6rem",
          "28": "7rem",
          "32": "8rem",
          "36": "9rem",
          "40": "10rem",
          "48": "12rem",
          "56": "14rem",
          "60": "15rem",
          "64": "16rem",
          "72": "18rem",
          "80": "20rem",
          "96": "24rem",
          "px": "1px",
          "0.5": "0.125rem",
          "1.5": "0.375rem",
          "2.5": "0.625rem",
          "3.5": "0.875rem",
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "full": "100%",
          "-1": "-0.25rem",
          "-2": "-0.5rem",
          "-3": "-0.75rem",
          "-4": "-1rem",
          "-5": "-1.25rem",
          "-6": "-1.5rem",
          "-7": "-1.75rem",
          "-8": "-2rem",
          "-9": "-2.25rem",
          "-10": "-2.5rem",
          "-11": "-2.75rem",
          "-12": "-3rem",
          "-13": "-3.25rem",
          "-14": "-3.5rem",
          "-15": "-3.75rem",
          "-16": "-4rem",
          "-20": "-5rem",
          "-24": "-6rem",
          "-28": "-7rem",
          "-32": "-8rem",
          "-36": "-9rem",
          "-40": "-10rem",
          "-48": "-12rem",
          "-56": "-14rem",
          "-60": "-15rem",
          "-64": "-16rem",
          "-72": "-18rem",
          "-80": "-20rem",
          "-96": "-24rem",
          "-px": "-1px",
          "-0.5": "-0.125rem",
          "-1.5": "-0.375rem",
          "-2.5": "-0.625rem",
          "-3.5": "-0.875rem",
          "-1/2": "-50%",
          "-1/3": "-33.33333%",
          "-2/3": "-66.66667%",
          "-1/4": "-25%",
          "-2/4": "-50%",
          "-3/4": "-75%",
          "-1/5": "-20%",
          "-2/5": "-40%",
          "-3/5": "-60%",
          "-4/5": "-80%",
          "-1/6": "-16.66667%",
          "-2/6": "-33.33333%",
          "-3/6": "-50%",
          "-4/6": "-66.66667%",
          "-5/6": "-83.33333%",
          "-1/12": "-8.33333%",
          "-2/12": "-16.66667%",
          "-3/12": "-25%",
          "-4/12": "-33.33333%",
          "-5/12": "-41.66667%",
          "-6/12": "-50%",
          "-7/12": "-58.33333%",
          "-8/12": "-66.66667%",
          "-9/12": "-75%",
          "-10/12": "-83.33333%",
          "-11/12": "-91.66667%",
          "-full": "-100%"
        },
        "skew": {
          "0": "0",
          "3": "3deg",
          "6": "6deg",
          "12": "12deg",
          "-12": "-12deg",
          "-6": "-6deg",
          "-3": "-3deg"
        },
        "transitionProperty": {
          "none": "none",
          "all": "all",
          "default": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
          "colors": "background-color, border-color, color, fill, stroke",
          "opacity": "opacity",
          "shadow": "box-shadow",
          "transform": "transform"
        },
        "transitionTimingFunction": {
          "linear": "linear",
          "in": "cubic-bezier(0.4, 0, 1, 1)",
          "out": "cubic-bezier(0, 0, 0.2, 1)",
          "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        "transitionDuration": {
          "75": "75ms",
          "100": "100ms",
          "150": "150ms",
          "200": "200ms",
          "300": "300ms",
          "500": "500ms",
          "700": "700ms",
          "1000": "1000ms"
        }
      },
      "variants": {
        "backgroundColor": [
          "responsive",
          "group-hover",
          "group-focus",
          "hover",
          "focus",
          "active"
        ],
        "borderColor": [
          "responsive",
          "group-hover",
          "group-focus",
          "hover",
          "focus"
        ],
        "textColor": [
          "responsive",
          "group-hover",
          "group-focus",
          "hover",
          "focus-within",
          "focus",
          "active"
        ],
        "textDecoration": [
          "responsive",
          "group-hover",
          "group-focus",
          "hover",
          "focus"
        ],
        "zIndex": [
          "responsive",
          "focus-within",
          "focus"
        ],
        "accessibility": [
          "responsive",
          "focus"
        ],
        "alignContent": [
          "responsive"
        ],
        "alignItems": [
          "responsive"
        ],
        "alignSelf": [
          "responsive"
        ],
        "appearance": [
          "responsive"
        ],
        "backgroundAttachment": [
          "responsive"
        ],
        "backgroundPosition": [
          "responsive"
        ],
        "backgroundRepeat": [
          "responsive"
        ],
        "backgroundSize": [
          "responsive"
        ],
        "borderCollapse": [
          "responsive"
        ],
        "borderRadius": [
          "responsive"
        ],
        "borderStyle": [
          "responsive"
        ],
        "borderWidth": [
          "responsive"
        ],
        "boxShadow": [
          "responsive",
          "hover",
          "focus"
        ],
        "boxSizing": [
          "responsive"
        ],
        "cursor": [
          "responsive"
        ],
        "display": [
          "responsive"
        ],
        "fill": [
          "responsive"
        ],
        "flex": [
          "responsive"
        ],
        "flexDirection": [
          "responsive"
        ],
        "flexGrow": [
          "responsive"
        ],
        "flexShrink": [
          "responsive"
        ],
        "flexWrap": [
          "responsive"
        ],
        "float": [
          "responsive"
        ],
        "clear": [
          "responsive"
        ],
        "fontFamily": [
          "responsive"
        ],
        "fontSize": [
          "responsive"
        ],
        "fontSmoothing": [
          "responsive"
        ],
        "fontStyle": [
          "responsive"
        ],
        "fontWeight": [
          "responsive",
          "hover",
          "focus"
        ],
        "height": [
          "responsive"
        ],
        "inset": [
          "responsive"
        ],
        "justifyContent": [
          "responsive"
        ],
        "letterSpacing": [
          "responsive"
        ],
        "lineHeight": [
          "responsive"
        ],
        "listStylePosition": [
          "responsive"
        ],
        "listStyleType": [
          "responsive"
        ],
        "margin": [
          "responsive"
        ],
        "maxHeight": [
          "responsive"
        ],
        "maxWidth": [
          "responsive"
        ],
        "minHeight": [
          "responsive"
        ],
        "minWidth": [
          "responsive"
        ],
        "objectFit": [
          "responsive"
        ],
        "objectPosition": [
          "responsive"
        ],
        "opacity": [
          "responsive",
          "hover",
          "focus"
        ],
        "order": [
          "responsive"
        ],
        "outline": [
          "responsive",
          "focus"
        ],
        "overflow": [
          "responsive"
        ],
        "padding": [
          "responsive"
        ],
        "placeholderColor": [
          "responsive",
          "focus"
        ],
        "pointerEvents": [
          "responsive"
        ],
        "position": [
          "responsive"
        ],
        "resize": [
          "responsive"
        ],
        "stroke": [
          "responsive"
        ],
        "strokeWidth": [
          "responsive"
        ],
        "tableLayout": [
          "responsive"
        ],
        "textAlign": [
          "responsive"
        ],
        "textTransform": [
          "responsive"
        ],
        "userSelect": [
          "responsive"
        ],
        "verticalAlign": [
          "responsive"
        ],
        "visibility": [
          "responsive"
        ],
        "whitespace": [
          "responsive"
        ],
        "width": [
          "responsive"
        ],
        "wordBreak": [
          "responsive"
        ],
        "gap": [
          "responsive"
        ],
        "gridAutoFlow": [
          "responsive"
        ],
        "gridTemplateColumns": [
          "responsive"
        ],
        "gridColumn": [
          "responsive"
        ],
        "gridColumnStart": [
          "responsive"
        ],
        "gridColumnEnd": [
          "responsive"
        ],
        "gridTemplateRows": [
          "responsive"
        ],
        "gridRow": [
          "responsive"
        ],
        "gridRowStart": [
          "responsive"
        ],
        "gridRowEnd": [
          "responsive"
        ],
        "transform": [
          "responsive"
        ],
        "transformOrigin": [
          "responsive"
        ],
        "scale": [
          "responsive",
          "hover",
          "focus"
        ],
        "rotate": [
          "responsive",
          "hover",
          "focus"
        ],
        "translate": [
          "responsive",
          "hover",
          "focus"
        ],
        "skew": [
          "responsive",
          "hover",
          "focus"
        ],
        "transitionProperty": [
          "responsive"
        ],
        "transitionTimingFunction": [
          "responsive"
        ],
        "transitionDuration": [
          "responsive"
        ]
      },
     },
    },
  },
  plugins: [],
}

