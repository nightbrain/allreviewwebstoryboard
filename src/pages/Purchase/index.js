import React from "react";
import MiddleContentComponent from "../../components/MiddleContent";
import TabSegmentComponent from "../Home/TabSegmentComponent";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PriceItemComponent from "./priceItem";

export default function PurchasePage() {
    const classes = useStyles();

    function renderTab1() {
        return (
            <div>
                <img src={require("../../assets/images/ads.png")} alt={""} className={classes.ads} />
                {[
                    { name: "20시간 쿠폰", price: "700,000", price2: "650,000" },
                    { name: "40시간 쿠폰", price: "1,200,000", price2: "1,100,000" },
                ].map((v, i) => (
                    <PriceItemComponent key={i} {...v} />
                ))}
            </div>
        );
    }

    function renderTab2() {
        return (
            <div>
                <div className={classes.tab2HeaderRoot}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={8}>
                            <MiddleContentComponent>
                                <span style={{ textAlign: "left", display: "inline-block", width: "100%" }}>
                                    <Typography variant={"h5"}>앱닥터 시간제 쿠폰 서비스</Typography>
                                    <Typography>
                                        앱닥터만의 새로운 개발 서비스로 시간을 쿠폰처럼 구매하고, 개발에 필요한 시간만큼 소진하는 합리적 서비스를 경험해
                                    </Typography>
                                </span>
                            </MiddleContentComponent>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <MiddleContentComponent>
                                <span style={{ background: "#d2d2d2", height: 90, width: "100%", display: "inline-block" }}>
                                    <MiddleContentComponent>
                                        <span style={{ color: "#7d7d7d" }}>배너영역</span>
                                    </MiddleContentComponent>
                                </span>
                            </MiddleContentComponent>
                        </Grid>
                    </Grid>
                </div>
                {[
                    {
                        name: "20시간 쿠폰",
                        price2: "650,000",
                        countOptions: {
                            disableButtons: true,
                            value: 1,
                        },
                    },
                    {
                        name: "40시간 쿠폰",
                        price2: "1,100,000",
                        countOptions: {
                            value: 1,
                        },
                    },
                    {
                        name: "40시간 쿠폰",
                        price2: "1,100,000",
                        countOptions: {
                            value: 1,
                        },
                    },
                ].map((v, i) => (
                    <PriceItemComponent key={i} {...v} />
                ))}
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {/*<MiddleContentComponent>*/}
            <span style={{ display: "inline-block", width: "80%", maxWidth: 900 }}>
                <div style={{ textAlign: "left" }}>
                    <Typography variant={"h5"} className={classes.typo}>
                        서비스 구매
                    </Typography>
                </div>
                <TabSegmentComponent tabs={["추천", "시간제 쿠폰"]} tabContents={[renderTab1(), renderTab2()]} style={{ boxShadow: "none" }} />
            </span>
            {/*</MiddleContentComponent>*/}
        </div>
    );
}
