import {makeStyles} from "@material-ui/core";
import {theme} from "../../utility/theme";

const useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        display:'flex',
        flexDirection:'column',
        padding: 16,
        width: 500,
        height: 325,
        borderRadius: 5,
        background: '#fff',
        boxShadow: '0 0 30px rgba(0,0,0,.1)'
    },
    title:{
        textAlign: 'left',
        color: `${theme.typography.secondary}`,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    fields:{
        flexDirection:'column',
        justifyContent: 'space-between',
        margin: '1rem 0 0',
        height: '100%'
    },
    label:{
        marginBottom: '0.5rem',
        fontSize: '14px'
    },
    item:{
        '&:not(:last-child)':{
            margin: '0 0 2.5rem'
        }
    },
    button:{
        display: 'flex',
        justifyContent:'center',
        '& button:hover':{
            animation: '$move 1.5s infinite ease',
            background: `${theme.button.primary}`
        },
        '& button::before':{
            content: '""',
            width: '100%',
            position: 'absolute',
            height: 70
        },
        '& button':{
            width: '100%',
            background: `${theme.button.primary}`,
            color: '#fff',
            fontWeight: 'bold'
        }
    },
    '@keyframes move':{
        '0%':{
            transform: 'translateY(-3px)'
        },
        '50%':{
            transform: 'translateY(3px)'
        },
        '100%':{
            transform: 'translateY(-3px)'
        }
    }
})

export default useStyles