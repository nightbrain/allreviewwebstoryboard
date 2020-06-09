import React, { useEffect, useState } from "react";
import useStyles from "./style";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function TabsComponent(props) {
    const classes = useStyles();

    const [active, setActive] = useState(props.defaultActive || 0);

    useEffect(() => {
        typeof props.onChange === "function" && props.onChange(active);
    }, [active, props]);

    return (
        <div className={classes.tabsBox}>
            <Grid container={true} spacing={2}>
                {props.tabs.map((v, i) => (
                    <Grid item={true} key={i} xs={12 / props.tabs.length}>
                        <TabComponent label={v} onClick={() => setActive(i)} isActive={active === i} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

TabsComponent.propTypes = {
    tabs: PropTypes.array.isRequired,
    defaultActive: PropTypes.number,
    onChange: PropTypes.func,
};

function TabComponent(props) {
    const classes = useStyles();

    return (
        <Paper
            elevation={0}
            className={[classes.boxShadow, classes.tabItem].join(" ")}
            style={{ background: props.isActive ? "#ffc329" : "#d2d2d2" }}
            onClick={props.onClick}>
            <span style={{ fontWeight: "bold" }}>{props.label}</span>
        </Paper>
    );
}

TabComponent.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};
