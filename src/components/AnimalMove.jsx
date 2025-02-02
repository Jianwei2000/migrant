import { useEffect, useState } from "react";
import kangaroo from "../images/animal.png";

function AnimalMove() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    useEffect(() => {
        // 绑定事件到 body
        document.body.addEventListener('mousemove', imageMove);

        // 清理事件监听器
        return () => {
            document.body.removeEventListener('mousemove', imageMove);
        };
    }, []);

    return (

        <div className="kangaroo"
            style={{
                transition: "transform 0.3s ease",
                transform: `translateX(${mousePosition.x * 0.1 - 20}px)`,
            }}>
            <img src={kangaroo} alt="" />
        </div>

    )
}
export default AnimalMove;