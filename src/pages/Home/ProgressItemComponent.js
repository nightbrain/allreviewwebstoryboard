import React from "react";
import MiddleContentComponent from "../../components/MiddleContent";
import PropTypes from "prop-types";
import LinearProgressComponent from "../../components/LinearProgress";
import useStyles from "./style";

export default function ProgressItemComponent(props) {
    const classes = useStyles();

    return (
        <MiddleContentComponent>
            <span style={{ display: "inline-block" }} className={classes.progressItem}>
                {props.label}
            </span>
            <br />
            <span style={{ color: props.color, fontWeight: "bold", fontSize: "x-large", display: "inline-block" }} className={classes.progressItem}>
                {props.value} {props.unit || "시간"}
            </span>
            <br />
            <span style={{ width: "60%", display: "inline-block" }}>
                <LinearProgressComponent value={props.percent} height={10} primaryColor={props.color} />
            </span>
        </MiddleContentComponent>
    );
}

ProgressItemComponent.propTypes = {
    color: PropTypes.any,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    unit: PropTypes.string,
};
