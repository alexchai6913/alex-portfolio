import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Geologica, sans-serif",
    body: "Geologica, sans-serif",
  },
  styles: {
    global: {
      "@font-face": {
        fontFamily: "Geologica",
        src: "url('./assets/fonts/Geologica.ttf') format('truetype')",
        fontDisplay: "swap",
      },
    },
  },
  fonts: {
    heading: "Geologica, sans-serif",
    body: "Geologica, sans-serif",
  },
  textStyles: {
    display1: {
      fontSize: "5rem",
      lineHeight: "4.75rem",
      letterSpacing: "-0.1rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    display2: {
      fontSize: "4.5rem",
      lineHeight: "3.75rem",
      letterSpacing: "-0.09rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    display3: {
      fontSize: "3.375rem",
      lineHeight: "3.75rem",
      letterSpacing: "-0.0675rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    headline1: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      letterSpacing: "-0.05rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    headline2: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      letterSpacing: "-0.03rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    headline3: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      letterSpacing: "-0.0175rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    headline4: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
      letterSpacing: "-0.01575rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    headline5: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "-0.014rem",
      fontWeight: 500,
      fontVariationSettings: '"shrp" 50, "crsv" 1'
    },
    caption: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.2rem",
      fontWeight: 500
    },
    paragraph: {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 200
    }
  },
  colors: {
    primary: "#666666",
    bgDark2: "#333333",
    bgLight: "#F5F5F5",
    bgMedium: "#CCCCCC",
    bgDark: "#1A1A1A",
    bgDark2: "#2D2D2D"
  },
  styles: {
    global: {
      body: {
        bg: "#2F3134",
        WebkitFontSmoothing: "antialiased",
        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      },
      "*": {
        transition: "ease 300ms",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "15rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        cursor: "pointer",
      },
    },
    Heading: {
      baseStyle: {
        fontVariationSettings: '"shrp" 50, "crsv" 1',
        fontWeight: 500,
      },
      sizes: {
        h1: {
          fontSize: "2.5rem",
          lineHeight: "3rem",
          letterSpacing: "-0.05rem",
        },
        h2: {
          fontSize: "1.5rem",
          lineHeight: "2rem",
          letterSpacing: "-0.03rem",
        },
        h3: {
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          letterSpacing: "-0.0175rem",
        },
        h4: {
          fontSize: "1.125rem",
          lineHeight: "1.5rem",
          letterSpacing: "-0.01575rem",
        },
        h5: {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          letterSpacing: "-0.014rem",
        },
        h6: {
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          letterSpacing: "-0.01225rem",
        },
      },
    },
  },
});

export default theme;
