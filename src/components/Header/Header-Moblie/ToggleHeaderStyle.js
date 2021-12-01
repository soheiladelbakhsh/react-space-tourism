import { makeStyles } from "@mui/styles";
import { Theme } from "../../../theme/Theme";

export const ToggleHeaderStyle=makeStyles({
    HeaderFixed:{
        display:"none",
        [Theme.breakpoints.down('sm')]:{
            display:"block",
            right:"0",
            transition:"all ease .5s !important"
        }
    },
    LinkTypographyHeaderMobile:{
        fontFamily:Theme.typography.body1Mobile.fontFamily,
        '& span':{
            fontWeight:Theme.typography.Bold,
            marginRight:"7px",
        }
    },
    rightUnvisible:{
        right:"-70%!important"
    },
    closeHeader:{
        backgroundColor:"transparent",
        color:"white"
    }
})