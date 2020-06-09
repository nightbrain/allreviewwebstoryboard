import { makeStyles } from "@material-ui/core/styles";

const DRAWER_WIDTH = 252;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        border: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
        background: "#313131",
        border: 0,
        boxShadow: "0 3px 15px rgba(93, 93, 93, 0.7)",
    },
    bottomList: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
    },
    drawerHeader: {
        background: "#ffc329",
        display: "table",
        width: "100%",
    },
    logoBox: {
        display: "table-cell",
        textAlign: "center",
        verticalAlign: "middle",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    avatarBox: {
        color: "#ffffff",
        width: "100%",
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    descBox: {
        borderRadius: theme.spacing(1),
        border: "1px solid #ffffff",
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        marginTop: 0,
        textAlign: "center",
        color: "#ffffff",
    },
}));

export default useStyles;
