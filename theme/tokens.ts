const body = 16;

const colors = {
  greys: {
    100: "#CFD4E5",
    200: "#AEB1B8",
  },
  pinks: {
    500: "#FF3378",
  },
  greens: {
    200: "#19EA25",
  },
  darks: {
    700: "#1D1D1D",
    800: "#121829",
    900: "#1C202E",
  },
  blues: {
    100: "#33C9FF",
    500: "#3B5998",
  },
  whites: {
    100: "#FFFFFF",
    200: "#FCFCFC",
    300: "#F5F5F5",
  },
  reds: {
    500: "#FF2525",
  },
};

const fontSizes = {
  1: 10 / body + "rem",
  2: 12 / body + "rem",
  3: 14 / body + "rem",
  4: 16 / body + "rem",
  5: 18 / body + "rem",
  6: 20 / body + "rem",
  7: 24 / body + "rem",
};

const fontWeights = {
  regular: 500,
  medium: 600,
  bold: 900,
};

const radii = {
  0: 0,
  2: "8px",
  3: "16px",
  4: "20px",
  5: "50%",
};

const space = {
  0: 0,
  1: (1 * 4) / body + "rem",
  2: (2 * 4) / body + "rem",
  3: (3 * 4) / body + "rem",
  4: (4 * 4) / body + "rem",
  5: (5 * 4) / body + "rem",
  6: (6 * 4) / body + "rem",
  7: (7 * 4) / body + "rem",
  8: (8 * 4) / body + "rem",
  9: (9 * 4) / body + "rem",
  10: (10 * 4) / body + "rem",
  11: (11 * 4) / body + "rem",
  12: (12 * 4) / body + "rem",
  13: (13 * 4) / body + "rem",
  14: (14 * 4) / body + "rem",
  15: (15 * 4) / body + "rem",
  16: (16 * 4) / body + "rem",
};

const tokens = {
  colors,
  fontSizes,
  fontWeights,
  radii,
  space,
};

export default tokens;
