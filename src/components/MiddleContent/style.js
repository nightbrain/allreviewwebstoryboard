import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        "& tr": {
            width: "100%",
            height: "100%",
            "& td": {
                width: "100%",
                height: "100%",
                textAlign: "center",
                verticalAlign: "middle",
            },
        },
    },
}));

export default useStyles;
