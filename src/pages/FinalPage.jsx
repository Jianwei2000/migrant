import { useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function FinalPage() {
    const navigate = useNavigate();
    const location = useLocation();

    // 從 URL 查詢參數中獲取 Yes 的數量
    const queryParams = new URLSearchParams(location.search);
    const pageId = queryParams.get("id");
    const visaId = queryParams.get("visa");
    const yesCount = parseInt(queryParams.get("y"));
    const noCount = parseInt(queryParams.get("n"));


    const percent = (yesCount / (yesCount + noCount)) * 100;    //百分比
    const random = Math.floor(Math.random() * 21);  //0~20亂數
    let result = Math.floor(percent - random);
    result = Math.max(result, 0);

    console.log(result);


    //gsap動畫
    const resultText = useRef(null);
    const percentText = useRef(null);
    const visaText = useRef(null);
    const titleText = useRef(null);

    useEffect(() => {
        // GSAP 动画
        gsap.fromTo(
            [visaText.current, titleText.current],
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
        );

        gsap.fromTo(
            percentText.current,
            { innerText: 0, fontSize: "0rem" },
            {

                innerText: result,
                fontSize: "4rem",
                duration: 10,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: () => {
                    percentText.current.innerText = Math.floor(percentText.current.innerText) + "%";
                }
            }
        );
    }, [result]);


    return (
        <>
            <div className="final-bg">
                <div className="container">
                    <ProgressBar />

                    <div className="result">
                        <h2 ref={visaText}>{visaId} 簽證</h2>
                        <h2 ref={titleText}>脫離鬼島成功率</h2>
                        <p ref={percentText}>{result}%</p>
                    </div>

                    <div className="page-control">
                        <button onClick={() => { navigate(`/${pageId}`); }}><i className="fa-solid fa-left-long"></i> 上一步</button>
                        <button onClick={() => { navigate("/"); }}><i className="fa-solid fa-house"></i> 回主頁</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FinalPage;