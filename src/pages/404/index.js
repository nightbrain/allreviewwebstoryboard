import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import MiddleContentComponent from "../../components/MiddleContent";

export default function NotFoundPage() {
    const location = useLocation();
    const history = useHistory();

    return (
        <MiddleContentComponent style={{ height: "100vh" }}>
            <h1>404</h1>
            <h5>페이지를 찾을 수 없습니다</h5>
            <h5>{location.pathname}</h5>
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    history.goBack();
                }}
                to={"#"}>
                돌아가
            </Link>
        </MiddleContentComponent>
    );
}
