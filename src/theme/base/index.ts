import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";
import radii from "./border-reduis";
import spacing from "./spacing";
import zIndices from "./z-index";
import sizes from "./sizes";

const base = {
  breakpoints,
  zIndices,
  radii,
  colors,
  ...typography,
  sizes,
  space: spacing,
};

export default base;
