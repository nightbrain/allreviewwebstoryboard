import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./style";
import MiddleContentComponent from "../../components/MiddleContent";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";

export default function CustomListComponent(props) {
    const classes = useStyles();

    return (
        <List className={classes.rootCustomList}>
            {props.items.map((v, i) => (
                <div key={i} style={{ position: "relative" }}>
                    <ListItem
                        button={true}
                        className={classes.listItem}
                        style={{ background: v.background || (i % 2 === 0 ? "#f5f8fb" : "#fafbf5") }}
                        onClick={() => {
                            typeof props.onClick === "function" && props.onClick(v, i);
                        }}>
                        <ListItemIcon>
                            <MiddleContentComponent>
                                <span className={classes.listItemIcon} style={{ background: v.leftContentBackground || props.leftContentBackground }}>
                                    {v.leftContent}
                                </span>
                            </MiddleContentComponent>
                        </ListItemIcon>
                        <ListItemText className={classes.listItemTextRoot}>
                            <Tooltip title={v.centerContent}>
                                <table style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td>{v.centerContent}</td>
                                            {v.secondCenterContent && (
                                                <td style={{ whiteSpace: "nowrap", textAlign: "right", color: "#959595", verticalAlign: "top" }}>
                                                    {v.secondCenterContent}
                                                </td>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </Tooltip>
                        </ListItemText>
                        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
                            <MiddleContentComponent>{v.rightContent}</MiddleContentComponent>
                        </ListItemSecondaryAction>
                    </ListItem>
                    {v.topRightContent && (
                        <div className={classes.listItemDotRoot}>
                            {v.topRightContent} <span className={classes.listItemDot} style={{ background: v.topRightContentActive ? "#0dd92e" : "#b5b5b5" }} />
                        </div>
                    )}
                </div>
            ))}
        </List>
    );
}

CustomListComponent.propTypes = {
    items: PropTypes.array.isRequired,
    leftContentBackground: PropTypes.any,
    onClick: PropTypes.func,
};
