# Ew UI

Probably the most opinionated React UI library.

## Type of pages

1. App pages. Pages behind the login.
2. Public pages. Pages accessible to everyone.

## Dashboard

You build your own Dashboard using the DashboardContent component and the sidebar, like so:

```jsx
function Dashboard() {
  return (
    <>
      <Sidebar />
      <DashboardContent />
    </>
  )
}
```

## Color palette

You need to define these values:

```js
"ew-primary": {
  DEFAULT: "#7F5aF0",
},
"ew-accent": {
  DEFAULT: "#444652",
},
"ew-text": {
  DEFAULT: "#333",
},
"ew-text-light": {
  DEFAULT: "#fff",
},
"ew-link": {
  DEFAULT: "#006bb8",
},
"ew-success": {
  DEFAULT: "#12E999",
},
"ew-warning": {
  DEFAULT: "#FBBD23",
},
"ew-error": {
  DEFAULT: "#BD271E",
},
"ew-bg": {
  DEFAULT: "#fff",
},
"ew-bg-dark": {
  DEFAULT: "#333",
}
```

Then, generate the shades for each color using https://www.tints.dev/ and fill the objects as:

```js
"ew-primary": {
  DEFAULT: "#7F5aF0",
  50: "#F1ECFD",
  100: "#E6DEFC",
  200: "#CCBEF9",
  300: "#B39DF6",
  400: "#9A7CF3",
  500: "#7F5AF0",
  600: "#521FEB",
  700: "#3A11B6",
  800: "#270B7A",
  900: "#13063D",
  950: "#09031C",
},
"ew-accent": {
  DEFAULT: "#444652",
  50: "#E9EAF1",
  100: "#D0D2E2",
  200: "#A1A4C4",
  300: "#757AA9",
  400: "#505581",
  500: "#333652",
  600: "#292C42",
  700: "#1F2132",
  800: "#14151F",
  900: "#0A0A10",
  950: "#060609",
},
"ew-text": {
  DEFAULT: "#333",
  50: "#EBEBEB",
  100: "#D6D6D6",
  200: "#ADADAD",
  300: "#858585",
  400: "#5C5C5C",
  500: "#333333",
  600: "#292929",
  700: "#1F1F1F",
  800: "#141414",
  900: "#0A0A0A",
  950: "#050505",
},
"ew-text-light": {
  DEFAULT: "#fff",
  50: "#FFFFFF",
  100: "#FFFFFF",
  200: "#FFFFFF",
  300: "#FFFFFF",
  400: "#FFFFFF",
  500: "#FFFFFF",
  600: "#CCCCCC",
  700: "#999999",
  800: "#666666",
  900: "#333333",
  950: "#1A1A1A",
},
"ew-link": {
  DEFAULT: "#006bb8",
  50: "#E0F2FF",
  100: "#BDE3FF",
  200: "#7AC8FF",
  300: "#3DAEFF",
  400: "#0092FA",
  500: "#006BB8",
  600: "#005694",
  700: "#004170",
  800: "#002A47",
  900: "#001524",
  950: "#000C14",
},
"ew-success": {
  DEFAULT: "#12E999",
  50: "#E7FDF5",
  100: "#D0FBEB",
  200: "#A0F8D8",
  300: "#71F4C4",
  400: "#3DF0AE",
  500: "#12E999",
  600: "#0EB97A",
  700: "#0B8E5E",
  800: "#075F3F",
  900: "#042F1F",
  950: "#021810",
},
"ew-warning": {
  DEFAULT: "#FBBD23",
  50: "#FFF9EB",
  100: "#FEF2D2",
  200: "#FDE4A5",
  300: "#FDD87D",
  400: "#FCCB50",
  500: "#FBBD23",
  600: "#E1A304",
  700: "#AA7B03",
  800: "#6E5002",
  900: "#372801",
  950: "#1E1601",
},
"ew-error": {
  DEFAULT: "#BD271E",
  50: "#FBE6E5",
  100: "#F7D1CF",
  200: "#EF9E9A",
  300: "#E77069",
  400: "#DF3D35",
  500: "#BD271E",
  600: "#961E18",
  700: "#721712",
  800: "#4B0F0C",
  900: "#280806",
  950: "#120403",
},
"ew-bg": {
  DEFAULT: "#fff",
  50: "#FFFFFF",
  100: "#FFFFFF",
  200: "#FFFFFF",
  300: "#FFFFFF",
  400: "#FFFFFF",
  500: "#FFFFFF",
  600: "#CCCCCC",
  700: "#999999",
  800: "#666666",
  900: "#333333",
  950: "#1A1A1A",
},
"ew-bg-dark": {
  DEFAULT: "#333",
  50: "#EBEBEB",
  100: "#D6D6D6",
  200: "#ADADAD",
  300: "#858585",
  400: "#5C5C5C",
  500: "#333333",
  600: "#292929",
  700: "#1F1F1F",
  800: "#141414",
  900: "#0A0A0A",
  950: "#050505",
},
```

Resources:

* https://www.webdesignrankings.com/resources/lolcolors/
* https://www.happyhues.co/palettes/4