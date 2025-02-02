import { useState, useEffect } from "react";
import BgVideo from "../videos/AU.mp4"
import TypingText from "../components/TypingText";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [showButton, setShowButton] = useState(false); // 控制按鈕顯示

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowButton(true);
        }, 6000);

        return () => clearTimeout(timer);

    }, []);
    const navigate = useNavigate();

    return (<>
        <div className="bg">
            <video src={BgVideo} loop muted autoPlay ></video>
        </div>
        <TypingText text="你是否也想脫離這座鬼島到澳洲生活 ?" />

        {showButton && (
            <button className={`start-btn ${showButton ? "show" : ""}`} onClick={() => { navigate("/category") }} >
                試算成功機率
            </button>
        )}

    </>)
}

export default HomePage;