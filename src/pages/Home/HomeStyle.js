import { makeStyles } from "@mui/styles";
import BgHome from "../../assets/home/BgHomeDesktop.jpg"
import { Theme } from "../../theme/Theme";



export const HomeStyle=makeStyles({
    root:{
        backgroundImage:`URL(${BgHome})`,
        width:"100vw",
        minHeight:"100vh",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        position:"absolute",
        top:"0",
        left:"0",
        '& .a':{
            color:Theme.palette.secondary.main,
        }
    }
})