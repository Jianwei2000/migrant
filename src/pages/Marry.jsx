import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import thinkingImage from "../images/thinking.png";
import visaImage from "../images/visa.jpg";
import AnimalMove from "../components/AnimalMove";

function Marry() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => {
        setYesNo([
            [null, null, null],
            [null, null, null],
            [null, null, null, null]
        ]);
        setSelectCard(id)
    };
    const nextClick = () => {
        const { yesCount, noCount } = countYesNo();
        if (selectCard) {
            navigate(`/final?id=marry&visa=${selectCard}&y=${yesCount}&n=${noCount}`)
        }
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 三組 Yes/No 狀態，使用陣列來表示每一組
    const [YesNo, setYesNo] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null, null]
    ]);  // [組別1, 組別2, 組別3]，每組有5個選項 (yes/no)

    // 檢查至少一組的選項全部被選擇（非 null）
    const allYesNo = YesNo.some(group => group.every(select => select !== null));



    // 更新選擇狀態
    const handleYesNo = (groupIndex, optionIndex, choice) => {
        const newSelections = [...YesNo];
        newSelections[groupIndex][optionIndex] = choice;
        setYesNo(newSelections);

    };


    // 計算 Yes 和 No 的總數
    const countYesNo = () => {
        let yesCount = 0;
        let noCount = 0;

        YesNo.forEach(group => {
            group.forEach(selection => {
                if (selection === "yes") {
                    yesCount++;
                } else if (selection === "no") {
                    noCount++;
                }
            });
        });

        return { yesCount, noCount };
    };
    return (<>
        <AnimalMove />
        <div className="container" onMouseMove={imageMove}>
            <ProgressBar />

            <div className="visa-cards">
                <div className={`card ${selectCard === "309" ? 'selected' : ''}`}
                    onClick={() => { cardClick("309") }}>
                    <img src={visaImage} alt="" />
                    <h2>309 <br />境外配偶簽證</h2>
                </div>
                <div className={`card ${selectCard === "820" ? 'selected' : ''}`}
                    onClick={() => { cardClick("820") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>820 <br />境內配偶簽證</h2>
                </div>
                <div className={`card ${selectCard === "300" ? 'selected' : ''}`}
                    onClick={() => { cardClick("300") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>300 <br />未婚夫妻簽證</h2>
                </div>
            </div>

            <div className="info">
                {selectCard === "309" && (
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>簽證種類</th>
                                <th>申請條件</th>
                                <th>是否符合</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>309 境外配偶簽證</td>
                                <td>
                                    <ul>
                                        <li>擔保人（配偶／同居伴侶）必須是澳洲公民、 永久居民或符合條件的紐西蘭公民</li>
                                        <li>擔保人最多只能擔保兩次，且擔保的時間需間隔至少五年</li>
                                        <li>需在澳洲境外申請此簽證</li>
                                    </ul>
                                </td>
                                <td >
                                    {YesNo[0].map((selection, index) => {
                                        return (
                                            <div key={index} className="yes-no">
                                                <button onClick={() => handleYesNo(0, index, "yes")}
                                                    style={{
                                                        color: selection === "yes" ? "green" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-check"></i></button>
                                                <button onClick={() => handleYesNo(0, index, "no")}
                                                    style={{
                                                        color: selection === "no" ? "red" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-xmark"></i></button>
                                            </div>
                                        )
                                    })}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                )}
                {selectCard === "820" && (
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>簽證種類</th>
                                <th>申請條件</th>
                                <th>是否符合</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>820 境內配偶簽證</td>
                                <td>
                                    <ul>
                                        <li>擔保人（配偶／同居伴侶）必須是澳洲公民、 永久居民或符合條件的紐西蘭公民</li>
                                        <li>擔保人最多只能擔保兩次，且擔保的時間需間隔至少五年</li>
                                        <li>需在澳洲境內申請此簽證</li>
                                    </ul>
                                </td>
                                <td>
                                    {YesNo[1].map((selection, index) => {
                                        return (
                                            <div key={index} className="yes-no">
                                                <button onClick={() => handleYesNo(1, index, "yes")}
                                                    style={{
                                                        color: selection === "yes" ? "green" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-check"></i></button>
                                                <button onClick={() => handleYesNo(1, index, "no")}
                                                    style={{
                                                        color: selection === "no" ? "red" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-xmark"></i></button>
                                            </div>
                                        )
                                    })}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                )}
                {selectCard === "300" && (
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>簽證種類</th>
                                <th>申請條件</th>
                                <th>是否符合</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>300 未婚夫妻簽證</td>
                                <td>
                                    <ul>
                                        <li>年滿 18 歲</li>
                                        <li>擔保人（未婚夫／妻）必須是澳洲公民、 永久居民或符合條件的紐西蘭公民</li>
                                        <li>需在澳洲境外申請此簽證</li>
                                        <li>在簽證期限結束前與未婚夫／妻結婚</li>
                                    </ul>
                                </td>
                                <td>
                                    {YesNo[2].map((selection, index) => {
                                        return (
                                            <div key={index} className="yes-no">
                                                <button onClick={() => handleYesNo(2, index, "yes")}
                                                    style={{
                                                        color: selection === "yes" ? "green" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-check"></i></button>
                                                <button onClick={() => handleYesNo(2, index, "no")}
                                                    style={{
                                                        color: selection === "no" ? "red" : "lightgray",
                                                    }}><i className="fa-solid fa-circle-xmark"></i></button>
                                            </div>
                                        )
                                    })}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                )}
            </div>


            {selectCard === null && (
                <>
                    <div className="no-select">
                        <img src={thinkingImage} alt=""
                            style={{
                                transition: "transform 0.3s ease",
                                left: `${mousePosition.x * 0.1}px`,


                            }} />
                    </div>
                </>
            )}




            <div className="page-control">
                <button onClick={() => { navigate("/category"); }}><i className="fa-solid fa-left-long"></i> 上一步</button>
                <button disabled={!allYesNo} onClick={nextClick}>下一步 <i className="fa-solid fa-right-long"></i></button>
            </div>

        </div>
    </>)
}

export default Marry;