import React from "react";
import DrawerComponent from "./components/Drawer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import PurchasePage from "./pages/Purchase";
import NotFoundPage from "./pages/404";
import "./App.scss";
import useGlobal from "./gloablStates";
import AlertComponent from "./components/Alert";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffc329",
        },
        secondary: {
            main: "#313131",
        },
    },
    props: {
        MuiButton: {
            size: "small",
        },
        MuiFilledInput: {
            margin: "dense",
        },
        MuiFormControl: {
            margin: "dense",
        },
        MuiFormHelperText: {
            margin: "dense",
        },
        MuiIconButton: {
            size: "small",
        },
        MuiInputBase: {
            margin: "dense",
        },
        MuiInputLabel: {
            margin: "dense",
        },
        MuiListItem: {
            dense: true,
        },
        MuiOutlinedInput: {
            margin: "dense",
        },
        MuiFab: {
            size: "small",
        },
        MuiTable: {
            size: "small",
        },
        MuiTextField: {
            margin: "dense",
        },
        MuiToolbar: {
            variant: "dense",
        },
    },
    overrides: {
        MuiIconButton: {
            sizeSmall: {
                // Adjust spacing to reach minimal touch target hitbox
                marginLeft: 4,
                marginRight: 4,
                padding: 12,
            },
        },
    },
});

export default function App() {
    const [globalState, globalActions] = useGlobal();

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: "flex" }}>
                <Router>
                    <DrawerComponent
                        items={[
                            { label: "대시보드", route: "/", icon: "home" },
                            { label: "문의/요청", route: "/request", icon: "chat" },
                            { label: "서비스 구매", route: "/purchase", icon: "shop" },
                            { label: "승인하기", route: "/approve", icon: "todo" },
                            { label: "요청현황", route: "/request-status", icon: "note" },
                        ]}
                        bottomItems={[
                            { label: "주문내역 조회", route: "/request-order-history", icon: "finger" },
                            { label: "결제내역 조회", route: "/request-payment-history", icon: "id" },
                            { label: "정보 수정", route: "/changing-information", icon: "user" },
                            {
                                label: "로그아웃",
                                route: "/logout",
                                icon: "logout",
                                onClick() {
                                    if (window.confirm("확실해?")) {
                                        window.location.href = "/";
                                    }
                                },
                            },
                        ]}
                        logo={require("./assets/images/logo.png")}
                    />
                    <main style={{ flexGrow: 1 }}>
                        {globalState.alertData && <AlertComponent {...globalState.alertData} handleClose={() => globalActions.closeAlert()} />}
                        <Switch>
                            <Route exact path={"/"}>
                                <HeaderLineComponent />
                                <HomePage />
                            </Route>
                            <Route path={"/purchase"}>
                                <div style={{ background: "#ffffff" }}>
                                    <HeaderLineComponent />
                                    <PurchasePage />
                                </div>
                            </Route>
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                </Router>
            </div>
        </ThemeProvider>
    );
}

function HeaderLineComponent() {
    return <div style={{ width: "100%", borderBottom: "1px solid #dcdcdc", paddingTop: theme.spacing(4) }} />;
}
