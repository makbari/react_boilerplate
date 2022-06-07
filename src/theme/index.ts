import { extendTheme } from "@chakra-ui/react";
import base from "./base";
import createGlobals from "./global";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
    cssVarPrefix: "moha",
  },
  ...base,
  styles: {
    global: (props: any) => createGlobals(props),
  },
});

export default theme;
