import React from "react";
import PropTypes from "prop-types";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";

export default function ProcedureComponent(props) {
    const classes = useStyles();

    return (
        <div>
            {props.label && <Typography>{props.label}</Typography>}
            <div style={{ position: "relative" }}>
                <table className={classes.procedureRoot}>
                    <tbody>
                        <tr>
                            {props.steps.map((v, i) => (
                                <td key={i} style={{ width: 100 / props.steps.length + "%", textAlign: "center", verticalAlign: "top" }}>
                                    <span className={classes.procedureRound} style={{ background: v.color }} />
                                    <Typography>{v.label}</Typography>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <div className={classes.procedureBoder} />
            </div>
        </div>
    );
}

ProcedureComponent.propTypes = {
    steps: PropTypes.array.isRequired,
    label: PropTypes.string,
};
