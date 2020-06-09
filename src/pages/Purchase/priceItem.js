import React, { useEffect, useState } from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import MiddleContentComponent from "../../components/MiddleContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function PriceItemComponent(props) {
    const classes = useStyles();

    const [value, setValue] = useState(props.countOptions ? props.countOptions.value : 0);

    useEffect(() => {
        let v = value;
        if (parseInt(v) >= 0) {
            props.onCount && props.onCount(v);
        } else setValue(0);
    }, [props, value]);

    return (
        <div style={{ textAlign: "left" }} className={classes.priceItem}>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={4}>
                    <span style={{ position: "relative", display: "inline-block" }}>
                        <img src={require("../../assets/images/priceBg.png")} alt={""} />
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                            <MiddleContentComponent>
                                <span className={classes.price1}>개발자 시간제 쿠폰</span>
                                <br />
                                <span className={classes.price2}>{props.name}</span>
                            </MiddleContentComponent>
                        </div>
                    </span>
                </Grid>
                {props.price && (
                    <Grid item={true} xs={3}>
                        <MiddleContentComponent>
                            <div style={{ textAlign: "center", textDecoration: "line-through" }}>{props.price} 원</div>
                        </MiddleContentComponent>
                    </Grid>
                )}
                <Grid item={true} xs={3}>
                    <MiddleContentComponent>
                        <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "larger", color: "#ea0027" }}>{props.price2} 원</div>
                    </MiddleContentComponent>
                </Grid>
                {props.countOptions && (
                    <Grid item={true} xs={3}>
                        <MiddleContentComponent>
                            <div style={{ textAlign: "center" }}>
                                <TextField
                                    variant="outlined"
                                    className={classes.tf}
                                    style={{
                                        width: props.countOptions.disableButtons ? 67 : undefined,
                                    }}
                                    InputProps={
                                        props.countOptions.disableButtons
                                            ? {}
                                            : {
                                                  startAdornment: (
                                                      <InputAdornment position="start">
                                                          <Button variant={"contained"} className={classes.controlBtn} onClick={() => setValue(value - 1)}>
                                                              -
                                                          </Button>
                                                      </InputAdornment>
                                                  ),
                                                  endAdornment: (
                                                      <InputAdornment position="end">
                                                          <Button variant={"contained"} className={classes.controlBtn} onClick={() => setValue(value + 1)}>
                                                              +
                                                          </Button>
                                                      </InputAdornment>
                                                  ),
                                              }
                                    }
                                    value={value}
                                    onChange={(e) => setValue(parseInt(e.target.value))}
                                />
                            </div>
                        </MiddleContentComponent>
                    </Grid>
                )}
                <Grid item={true} xs={2}>
                    <MiddleContentComponent>
                        <div style={{ textAlign: "right" }}>
                            <Button variant={"contained"} color={"secondary"} className={classes.btn}>
                                구매하기
                            </Button>
                        </div>
                    </MiddleContentComponent>
                </Grid>
            </Grid>
        </div>
    );
}
