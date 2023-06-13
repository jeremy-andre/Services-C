import { extendTheme, ColorMode } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: {
      background: "#1a1a1a",
      text: "#ffffff",
    },
    light: {
      background: "#dedede",
      text: "#000000",
    },
  },
  styles: {
    global: (props: { colorMode: ColorMode }) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.background" : "light.background",
      },
      "::-webkit-scrollbar": {
        width: "0.4rem",
        height: "0.4rem",
        backgroundColor: props.colorMode === "dark" ? "#1a1a1a" : "#dedede",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0.4rem",
        // backgroundColor: props.colorMode === "dark" ? "dark.background" : "#c4c4c4",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "0.4rem",
        backgroundColor: props.colorMode === "dark" ? "#dedede" : "#1a1a1a",
      },
    }),
  },
});
export default theme;
