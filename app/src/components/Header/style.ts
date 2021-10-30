import {makeStyles} from "@material-ui/core";
import {theme} from "../../utility/theme";
const useStyles = makeStyles({
    row:{
        justifyContent: "flex-end"
    },
    button:{
        background: theme.button.primary
    }
})

export default useStyles