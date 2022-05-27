import { createMuiTheme } from "@material-ui/core";
import { purple, red } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";

export default createMuiTheme({
    palette:{
        primary:red,
        secondary: yellow
    },
    status:{
        danger:purple,
    }
});