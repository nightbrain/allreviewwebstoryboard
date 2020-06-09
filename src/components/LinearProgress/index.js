import React from "react";
import PropTypes from "prop-types";

export default function LinearProgressComponent(props) {
    const radius = (props.height || 10) / 2;

    return (
        <div
            style={{
                width: "100%",
                height: props.height || 10,
                background: props.secondColor || "#eeeeee",
                borderRadius: radius,
                position: "relative",
                overflow: "hidden",
            }}>
            <div
                style={{
                    position: "absolute",
                    height: "100%",
                    left: 0,
                    right: 0,
                    width: props.value + "%",
                    background: props.primaryColor || "#000000",
                }}
            />
        </div>
    );
}

LinearProgressComponent.propTypes = {
    value: PropTypes.number.isRequired,
    primaryColor: PropTypes.any,
    secondColor: PropTypes.any,
    height: PropTypes.number,
};
