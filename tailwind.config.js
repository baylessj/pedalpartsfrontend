const production = !process.env.ROLLUP_WATCH;

const gradients = {
  "ocean-light": ["#4398ee", "#5f54f1"],
  "ocean-dark": ["#4398ee", "#4f45d6"],
  "grey-dark": ["#b8c2cc", "#8795a1"],
  vscode: ["#2c303b", "#414758"],
  "grey-code": ["#fff", "#f0f0f0"],
  code: ["#fff", "#f7fafc"],
  "red-dark": ["#f05252", "#c81e1e"],
  "orange-dark": ["#f6993f", "#de751f"],
  "yellow-dark": ["#ffed4a", "#f2d024"],
  "green-dark": ["#38c172", "#45c9a7"],
  "teal-dark": ["#47daaf", "#30b08f"],
  "indigo-dark": ["#6574cd", "#5661b3"],
  "purple-dark": ["#9561e2", "#794acf"],
  "pink-dark": ["#f66d9b", "#eb5286"],
};

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        code: {
          DEFAULT: "#f9fcfd",
        },
        ppc: {
          light: "#ff8119",
          DEFAULT: "#de751f",
          dark: "#9c4f11",
        },
        background_light: "#666",
        background_med: "#444",
        background_dark: "#333",
      },
      height: {
        dashboard: "calc(100vh - 4rem)",
      },
      linearBorderGradients: {
        colors: gradients,
        directions: {
          t: "to top",
          tr: "to top right",
          r: "to right",
          br: "to bottom right",
          b: "to bottom",
          bl: "to bottom left",
          l: "to left",
          tl: "to top left",
        },
      },
      linearGradientColors: gradients,
      linearGradientDirections: {
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      },
      boxShadow: {
        "lg-soft": "0 10px 20px rgba(91,107,174,.2)",
        "xl-cards":
          "0 20px 25px -5px rgba(67, 152, 238, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "ui-sans-serif"],
    },
  },
  variants: {
    linearBorderGradients: ["responsive", "hover"],
    linearGradients: ["responsive", "hover"],
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-gradients"),
    require("tailwindcss-border-gradients")(),
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
