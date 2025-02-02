import { useEffect, useRef } from "react"
import { gsap } from "gsap";

function TypingText({ text }) {
    const textRef = useRef(null);
    useEffect(() => {
        const textElement = textRef.current;
        const chars = text.split(""); // 將文字分割成單個字符

        // 清空容器並將每個字符包裝成 span
        textElement.innerHTML = "";
        chars.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            textElement.appendChild(span);
        });
        // GSAP 動畫：每個字母依次出現
        gsap.fromTo(
            textElement.children,
            {
                opacity: 0,
                y: 0, // 初始位置統一為 0
                x: 0,
            },
            {
                opacity: 1,
                duration: 1.5,
                stagger: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(textElement.children, {
                        opacity: 0.5, // 固定的波浪高度
                        repeat: -1,
                        yoyo: true,
                        duration: 1, // 讓波浪動畫更流暢
                        stagger: 0.2, // 讓波浪一個接一個發生
                        ease: "sine.inOut",
                    });
                }
            }
        );

    }, [text]); // 當 text 改變時重新執行動畫


    return (
        <>
            <h1 ref={textRef} style={{ fontFamily: "Courier New, monospace" }} />
        </>
    )
}

export default TypingText;