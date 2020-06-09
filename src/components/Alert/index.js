import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import "./styles.scss";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        textAlign: "center",
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <Close />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function AlertComponent(props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} className={"alert"}>
            <DialogTitle onClose={props.handleClose}>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText
                    style={{
                        background: "#eeeeee",
                        borderRadius: 5,
                        padding: 10,
                    }}>
                    {props.desc}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={6}>
                        <Button
                            onClick={() => {
                                typeof props.leftButtonClick === "function" && props.leftButtonClick();
                                props.handleClose();
                            }}
                            color={"primary"}
                            variant={"contained"}
                            style={{
                                width: "100%",
                                borderRadius: 0,
                                boxShadow: "none",
                            }}>
                            {props.leftButtonText}
                        </Button>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button
                            onClick={() => {
                                typeof props.rightButtonClick === "function" && props.rightButtonClick();
                                props.handleClose();
                            }}
                            color={"secondary"}
                            variant={"contained"}
                            autoFocus
                            style={{
                                width: "100%",
                                borderRadius: 0,
                                boxShadow: "none",
                            }}>
                            {props.rightButtonText}
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}

AlertComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    leftButtonText: PropTypes.string,
    rightButtonText: PropTypes.string,
    leftButtonClick: PropTypes.func,
    rightButtonClick: PropTypes.func,
};
