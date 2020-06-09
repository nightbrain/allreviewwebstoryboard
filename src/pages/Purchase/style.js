import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "calc(100vh - " + theme.spacing(4) + "px - 2px)",
        textAlign: "center",
    },
    typo: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    ads: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: "block",
    },
    price1: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        background: "#ffc329",
        fontSize: "small",
        display: "inline-block",
    },
    price2: {
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "large",
        marginTop: theme.spacing(1),
    },
    priceItem: {
        padding: theme.spacing(2),
    },
    btn: {
        boxShadow: "none",
        borderRadius: 0,
        "& span": {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
    },
    controlBtn: {
        boxShadow: "none",
        borderRadius: 0,
    },
    tf: {
        "& input": {
            textAlign: "center",
            border: "0 !important",
            padding: 0,
            margin: 0,
        },
        "& div": {
            padding: 0,
            paddingTop: 6,
            paddingBottom: 6,
            margin: 0,
            border: "0 !important",
        },
        padding: 0,
        margin: 0,
        border: "0 !important",
    },
    tab2HeaderRoot: {
        padding: theme.spacing(2),
    },
}));

export default useStyles;
