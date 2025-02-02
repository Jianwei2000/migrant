import { useLocation } from "react-router-dom";

function ProgressBar() {
    const location = useLocation();
    let step = 1;

    if (location.pathname === "/skilled" ||
        location.pathname === "/boss" ||
        location.pathname === "/employer" ||
        location.pathname === "/parents" ||
        location.pathname === "/marry") {
        step = 2;
    } else if (location.pathname === "/final") {
        step = 3;
    }

    return (
        <>
            <div className="progress-content">
                <div className="progress-text">
                    <h2 className={` ${step >= 1 ? "active" : ""}`}><i className="fa-solid fa-arrow-pointer"></i> 移民類型</h2>
                    <h2 className={` ${step >= 2 ? "active" : ""}`}><i className="fa-brands fa-cc-visa"></i> 簽證匹配</h2>
                    <h2 className={` ${step >= 3 ? "active" : ""}`}><i className="fa-solid fa-square-poll-vertical"></i> 計算結果</h2>
                </div>
                <div className="progress-bar">
                    <div className="progress-line" style={{ width: `${(step - 1) * 50}%` }}></div>
                    <div className={`circle-num ${step >= 1 ? "active" : ""}`}>1</div>
                    <div className={`circle-num ${step >= 2 ? "active" : ""}`}>2</div>
                    <div className={`circle-num ${step >= 3 ? "active" : ""}`}>3</div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;