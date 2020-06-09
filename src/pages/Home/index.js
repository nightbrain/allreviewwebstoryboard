import React, { useState } from "react";
import useStyles from "./style";
import TabSegmentComponent from "./TabSegmentComponent";
import Grid from "@material-ui/core/Grid";
import MiddleContentComponent from "../../components/MiddleContent";
import Paper from "@material-ui/core/Paper";
import ProgressItemComponent from "./ProgressItemComponent";
import TabsComponent from "./TabsComponent";
import ProcedureComponent from "./ProcedureComponent";
import CustomListComponent from "./CustomListComponent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useGlobal from "../../globalStates";

export default function HomePage() {
    const classes = useStyles();

    const [, globalActions] = useGlobal();
    const [activedTab, setActivedTab] = useState(0);

    function renderSegment5Demo() {
        return (
            <TabSegmentComponent
                tabs={["승인 대기 중인 이슈 5건"]}
                tabContents={[
                    <CustomListComponent
                        onClick={(v) => {
                            // alert("Click: " + v.centerContent);
                            globalActions.openAlert({
                                title: "쿠폰 구매",
                                desc: "승인하기 위해 시간이 부족해 시간 구매가 필요합니다.  원하시는 구매형태를 선택해주세요",
                                leftButtonText: "시간제 쿠폰 구매하기",
                                rightButtonText: "12시간만 구매하기",
                            });
                        }}
                        items={[
                            {
                                leftContent: "Issue, 3464",
                                centerContent: "안드로이드 소스 분석",
                                rightContent: "32H",
                            },
                            {
                                leftContent: "Issue, 3465",
                                centerContent: "안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성",
                                rightContent: "15H",
                            },
                            {
                                leftContent: "Issue, 3466",
                                centerContent: "안드로이드 소스 분석",
                                rightContent: "32H",
                            },
                            {
                                leftContent: "Issue, 3475",
                                centerContent: "안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성",
                                rightContent: "15H",
                            },
                            {
                                leftContent: "Issue, 3465",
                                centerContent: "안드로이드 소스 분석",
                                rightContent: "32H",
                            },
                        ]}
                    />,
                ]}
                rightLabel={"승인하러 가기"}
                onClickRightButton={() => {
                    // alert("Load more...");
                    globalActions.openAlert({
                        title: "쿠폰 구매",
                        desc: "승인하기 위해 시간이 부족해 시간 구매가 필요합니다.  원하시는 구매형태를 선택해주세요",
                        leftButtonText: "시간제 쿠폰 구매하기",
                        rightButtonText: "12시간만 구매하기",
                    });
                }}
            />
        );
    }

    function renderSegment14Demo() {
        return (
            <TabSegmentComponent
                tabs={["진행 중인 이슈 14건"]}
                tabContents={[
                    <CustomListComponent
                        onClick={(v) => {
                            // alert("Click: " + v.centerContent);
                            globalActions.openAlert({
                                title: "쿠폰 구매",
                                desc: "승인하기 위해 시간이 부족해 시간 구매가 필요합니다.  원하시는 구매형태를 선택해주세요",
                                leftButtonText: "시간제 쿠폰 구매하기",
                                rightButtonText: "12시간만 구매하기",
                            });
                        }}
                        leftContentBackground={"#556fb5"}
                        items={[
                            {
                                leftContent: "Issue, 2336",
                                centerContent: "안드로이드 소스 분석",
                                secondCenterContent: "2019.04.09",
                                rightContent: "32H",
                                topRightContent: "개발자 배정",
                                topRightContentActive: false,
                            },
                            {
                                leftContent: "Issue, 2337",
                                centerContent: "안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성",
                                secondCenterContent: "2019.04.09",
                                rightContent: "32H",
                                topRightContent: "개발자 배정",
                                topRightContentActive: true,
                            },
                            {
                                leftContent: "Issue, 2338",
                                centerContent: "안드로이드 소스 분석",
                                secondCenterContent: "2019.04.09",
                                rightContent: "32H",
                                topRightContent: "개발자 배정",
                                topRightContentActive: true,
                            },
                            {
                                leftContent: "Issue, 2339",
                                centerContent: "안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성",
                                secondCenterContent: "2019.04.09",
                                rightContent: "32H",
                                topRightContent: "개발자 배정",
                                topRightContentActive: true,
                            },
                            {
                                leftContent: "Issue, 2340",
                                centerContent: "안드로이드 소스 분석",
                                secondCenterContent: "2019.04.09",
                                rightContent: "32H",
                                topRightContent: "개발자 배정",
                                topRightContentActive: true,
                            },
                        ]}
                    />,
                ]}
            />
        );
    }

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.reportSegment}>
                <Grid
                    container={true}
                    style={{
                        height: 140,
                    }}>
                    <Grid item={true} xs={2} className={classes.fullHeight}>
                        <MiddleContentComponent style={{ background: "#7D7D7D", color: "#ffffff" }}>서비스 진행 현황</MiddleContentComponent>
                    </Grid>
                    <Grid item={true} xs={10} className={classes.fullHeight}>
                        <Grid container={true} className={classes.fullHeight}>
                            <Grid item={true} xs={4} className={classes.fullHeight}>
                                <ProgressItemComponent label={"진행 중"} value={"28"} percent={9.92} color={"#556fb5"} />
                            </Grid>
                            <Grid item={true} xs={4} className={classes.fullHeight}>
                                <ProgressItemComponent label={"전체 완료"} value={"456"} percent={89.35} color={"#f9b300"} />
                            </Grid>
                            <Grid item={true} xs={4} className={classes.fullHeight}>
                                <ProgressItemComponent label={"잔여 시간"} value={"12"} percent={6.46} color={"#13b5b1"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.notificationSegment}>쿠폰 유효기간( ~ 2020년 3월 10일)이 얼마 남지 않았습니다.</Paper>
            <TabsComponent tabs={["시간제 쿠폰 서비스", "월 후불제", "프로젝트"]} onChange={(currentTab) => setActivedTab(currentTab)} />
            <ProcedureComponent
                label={"앱닥터 문의 시 아래와 같은 프로세스로 진행됩니다."}
                steps={[
                    {
                        label: "문의/요청",
                        color: "#99dcda",
                    },
                    {
                        label: "요청 분석",
                        color: "#7ad2d0",
                    },
                    {
                        label: "승인대기중",
                        color: "#59c8c5",
                    },
                    {
                        label: "개발자 배정",
                        color: "#a0aed2",
                    },
                    {
                        label: "진행중",
                        color: "#8a9bc8",
                    },
                    {
                        label: "개발완료",
                        color: "#7589be",
                    },
                    {
                        label: "고객 검수",
                        color: "#6279b5",
                    },
                    {
                        label: "개발종료",
                        color: "#0dd92e",
                    },
                ]}
            />
            <div hidden={activedTab !== 0}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={6}>
                        {renderSegment5Demo()}
                    </Grid>
                    <Grid item={true} xs={6}>
                        {renderSegment14Demo()}
                    </Grid>
                </Grid>
            </div>
            <div hidden={activedTab !== 1}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={7}>
                        {renderSegment5Demo()}
                    </Grid>
                    <Grid item={true} xs={5}>
                        {renderSegment14Demo()}
                    </Grid>
                </Grid>
            </div>
            <div hidden={activedTab !== 2}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={5}>
                        <TabSegmentComponent
                            tabs={["승인 대기 중인 이슈 0건"]}
                            tabContents={[
                                <MiddleContentComponent
                                    style={{
                                        background: "#f5f8fb",
                                        height: 384,
                                    }}>
                                    <Typography>승인 요청중인 이슈가 없습니다.</Typography>
                                    <Typography>문의/요청 하시겠습니까?</Typography>
                                    <Button color={"primary"} variant={"contained"} className={classes.segment31Button}>
                                        <span>바로가기</span>
                                    </Button>
                                </MiddleContentComponent>,
                            ]}
                        />
                    </Grid>
                    <Grid item={true} xs={7}>
                        {renderSegment14Demo()}
                    </Grid>
                </Grid>
            </div>
            <TabSegmentComponent
                tabs={["최근 문의 / 요청 현황"]}
                tabContents={[
                    <div className={classes.segment2}>
                        {[
                            {
                                t1: "저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다.",
                                t2: "2020.01.13",
                                t3: "담당자 확인중",
                                t3Color: "#13b5b1",
                            },
                            {
                                t1: "저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다.",
                                t2: "2020.01.13",
                                t3: "담당자 확인중",
                            },
                            {
                                t1: "저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다.",
                                t2: "2020.01.13",
                                t3: "담당자 확인중",
                            },
                        ].map((v, i) => (
                            <Grid container={true} spacing={2} key={i} className={classes.segment2Item}>
                                <Grid item={true} xs={8}>
                                    {v.t1}
                                </Grid>
                                <Grid item={true} xs={2} style={{ textAlign: "right", color: "#959595" }}>
                                    {v.t2}
                                </Grid>
                                <Grid item={true} xs={2} style={{ textAlign: "right", color: v.t3Color }}>
                                    {v.t3}
                                </Grid>
                            </Grid>
                        ))}
                    </div>,
                ]}
                rightLabel={
                    <span style={{ color: "#7d7d7d" }}>
                        더보기
                        <span className={classes.customIcon}>
                            <img src={require("../../assets/images/arrowRight.png")} alt={"arrow"} />
                        </span>
                    </span>
                }
                rightButtonStyle={{
                    background: "rgba(255, 255, 255, 0)",
                }}
                onClickRightButton={() => {
                    alert("더보기 >");
                }}
            />
        </div>
    );
}
