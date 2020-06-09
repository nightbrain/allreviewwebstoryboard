import React from "react";
import useStyles from "./style";
import PropTypes from "prop-types";

export default function MiddleContentComponent(props) {
    const classes = useStyles();

    return (
        <table className={classes.root} style={props.style}>
            <tbody>
                <tr>
                    <td>{props.children}</td>
                </tr>
            </tbody>
        </table>
    );
}

MiddleContentComponent.propTypes = {
    style: PropTypes.any,
};
