import React, { useEffect, useRef, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useGlobal from "../../gloablStates";
import * as PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./style";

export default function DrawerComponent(props) {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const [globalState, globalActions] = useGlobal();
    const bottomListRef = useRef();
    const logoBoxRef = useRef();
    const avatarBoxRef = useRef();
    const [bottomListHeight, setBottomListHeight] = useState("0px");
    const [logoBoxHeight, setLogoBoxHeight] = useState("0px");
    const [avatarBoxHeight, setAvatarBoxHeight] = useState("0px");

    useEffect(() => {
        if (bottomListRef.current) {
            setBottomListHeight(bottomListRef.current.clientHeight + "px");
        }
        if (logoBoxRef.current) {
            setLogoBoxHeight(logoBoxRef.current.clientHeight + "px");
        }
        if (avatarBoxRef.current) {
            setAvatarBoxHeight(avatarBoxRef.current.clientHeight + "px");
        }
    }, []);

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={globalState.openDrawer}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div ref={logoBoxRef} className={classes.drawerHeader}>
                <div className={classes.logoBox}>
                    <img src={props.logo} alt={"Logo"} />
                </div>
            </div>
            <div ref={avatarBoxRef}>
                <table className={classes.avatarBox}>
                    <tbody>
                        <tr style={{ width: "100%" }}>
                            <td style={{ textAlign: "right", width: 40 }}>
                                <Avatar src={require("../../assets/images/avatar.png")} />
                            </td>
                            <td style={{ verticalAlign: "middle", textAlign: "left", padding: 10 }}>홍길동님</td>
                        </tr>
                    </tbody>
                </table>
                <div className={classes.descBox}>
                    <span style={{ fontSize: "small" }}>HTML 퍼블리싱</span>
                    <br />
                    <span style={{ fontWeight: "bold" }}>빠른 견적 시스템</span>
                </div>
            </div>
            <List
                style={{
                    maxHeight: "calc(100vh - " + bottomListHeight + " - " + logoBoxHeight + " - " + avatarBoxHeight + ")",
                    overflow: "auto",
                }}>
                {(props.items || []).map((data) => (
                    <ListItemComponent {...data} key={data.route} />
                ))}
            </List>
            {Array.isArray(props.bottomItems) && props.bottomItems.length && (
                <List ref={bottomListRef} className={classes.bottomList}>
                    {props.bottomItems.map((data) => (
                        <ListItemComponent {...data} key={data.route} />
                    ))}
                </List>
            )}
        </Drawer>
    );
}

function ListItemComponent(props) {
    const location = useLocation();
    const history = useHistory();

    const isActive = location.pathname === props.route;

    return (
        <ListItem
            button
            selected={isActive}
            onClick={() => {
                if (typeof props.onClick === "function") return props.onClick();
                history.push(props.route);
            }}>
            <ListItemIcon>
                <span
                    style={{
                        width: "100%",
                        textAlign: "center",
                    }}>
                    <img
                        src={require("../../assets/icons/" + (isActive ? props.icon + "Active" : props.icon) + ".png")}
                        alt={props.label}
                        style={{ maxWidth: 20, maxHeight: 20 }}
                    />
                </span>
            </ListItemIcon>
            <ListItemText
                primary={props.label}
                style={{
                    color: isActive ? "#ffc329" : "#ffffff",
                }}
            />
        </ListItem>
    );
}

DrawerComponent.propTypes = {
    bottomItems: PropTypes.array,
    items: PropTypes.array.isRequired,
    logo: PropTypes.any.isRequired,
};
