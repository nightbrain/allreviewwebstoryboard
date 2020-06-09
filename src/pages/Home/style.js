import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    segmentRoot: {
        borderRadius: theme.spacing(1),
        overflow: "hidden",
        marginBottom: theme.spacing(3),
        boxShadow: "0 3px 15px rgba(93, 93, 93, 0.15)",
        position: "relative",
    },
    reportSegment: {
        boxShadow: "0 3px 15px rgba(93, 93, 93, 0.15)",
        borderRadius: 0,
    },
    notificationSegment: {
        background: "#7D8D9D",
        boxShadow: "0 3px 15px rgba(93, 93, 93, 0.15)",
        borderRadius: 0,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1),
        textAlign: "center",
        color: "#ffffff",
    },
    boxShadow: {
        boxShadow: "0 3px 15px rgba(93, 93, 93, 0.15)",
    },
    fullHeight: {
        height: "100%",
    },
    progressItem: {
        marginBottom: theme.spacing(1),
    },
    tabItem: {
        textAlign: "center",
        padding: theme.spacing(2),
        borderRadius: 0,
        cursor: "pointer",
    },
    tabsBox: {
        width: "100%",
        marginBottom: theme.spacing(3),
    },
    procedureRoot: {
        width: "100%",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    procedureRound: {
        height: 16,
        width: 16,
        borderRadius: "50%",
        background: "#000000",
        display: "inline-block",
    },
    procedureBoder: {
        border: "1px solid #dcdcdc",
        width: "100%",
        position: "absolute",
        top: 11,
        left: 0,
        zIndex: -1,
    },
    tabSegmentRightDesc: {
        position: "absolute",
        top: 10,
        right: 10,
        background: "#7d7d7d",
        padding: 3,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: "0 !important",
        "& span": {
            fontSize: "small",
            color: "#ffffff",
            "& :hover": {
                color: "#000000",
            },
        },
    },
    listItemIcon: {
        display: "inline-block",
        padding: 3,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        fontSize: "small",
        background: "#13b5b1",
        color: "#ffffff",
        marginRight: theme.spacing(1),
    },
    listItemSecondaryAction: {
        borderLeft: "1px solid #dcdcdc",
        marginRight: -theme.spacing(2),
        width: 100,
        pointerEvents: "none",
    },
    listItem: {
        border: "1px solid #dcdcdc",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        borderRadius: theme.spacing(1),
        overflow: "hidden",
        background: "#f5f8fb",
        marginTop: theme.spacing(1),
    },
    rootCustomList: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(1),
    },
    listItemDotRoot: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        fontSize: "x-small",
        pointerEvents: "none",
        whiteSpace: "nowrap",
    },
    listItemDot: {
        background: "#b5b5b5",
        width: 8,
        height: 8,
        display: "inline-block",
        borderRadius: "50%",
    },
    listItemTextRoot: {
        paddingRight: theme.spacing(8),
        maxHeight: 22,
        overflow: "hidden",
    },
    listItemCenterContent: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
        display: "inline-block",
    },
    customIcon: {
        display: "inline-block",
        borderRadius: "50%",
        background: "#7d7d7d",
        width: 18,
        height: 18,
        marginLeft: 10,
        "& img": {
            maxWidth: 8,
            maxHeight: 8,
            marginLeft: 2,
            marginBottom: 2,
        },
    },
    segment2: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
    },
    segment2Item: {
        marginTop: theme.spacing(2),
    },
    segment31Root: {
        height: "100%",
        paddingBottom: theme.spacing(2),
    },
    segment31Root2: {
        height: "100%",
    },
    segment31Button: {
        marginTop: theme.spacing(2),
        borderRadius: "0 !important",
        boxShadow: "none !important",
        "& span": {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
    },
}));

export default useStyles;
