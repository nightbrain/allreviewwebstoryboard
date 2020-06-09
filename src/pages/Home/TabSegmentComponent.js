import useStyles from "./style";
import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
// noinspection NpmUsedModulesInstalled
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

export default function TabSegmentComponent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.defaultActive || 0);

    return (
        <Paper elevation={0} className={classes.segmentRoot} style={props.style}>
            <AppBar position="static" color="inherit" elevation={0}>
                <StyledTabs value={value} onChange={(e, v) => setValue(v)} indicatorColor={"primary"}>
                    {props.tabs.map((v, i) => (
                        <Tab label={v} key={i} style={{ fontWeight: "bold" }} />
                    ))}
                </StyledTabs>
            </AppBar>
            {props.tabContents.map((v, i) => (
                <div hidden={value !== i} key={i}>
                    {v}
                </div>
            ))}
            {props.rightLabel && (
                <Button className={classes.tabSegmentRightDesc} onClick={props.onClickRightButton} style={props.rightButtonStyle}>
                    <span>{props.rightLabel}</span>
                </Button>
            )}
        </Paper>
    );
}

TabSegmentComponent.propTypes = {
    tabs: PropTypes.array.isRequired,
    tabContents: PropTypes.array.isRequired,
    defaultActive: PropTypes.number,
    rightLabel: PropTypes.any,
    onClickRightButton: PropTypes.func,
    rightButtonStyle: PropTypes.any,
    style: PropTypes.any,
};

const StyledTabs = withStyles({
    root: {
        borderBottom: "1px solid #e8e8e8",
        paddingLeft: 20,
        paddingRight: 20,
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
            width: "100%",
            backgroundColor: "#ffc329",
        },
        height: 3,
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
