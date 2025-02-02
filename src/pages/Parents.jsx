import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import thinkingImage from "../images/thinking.png";
import visaImage from "../images/visa.jpg";
import AnimalMove from "../components/AnimalMove";

function Parents() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => {
        setYesNo([
            [null, null, null, null, null],

            [null, null, null, null, null, null]
        ]);
        setSelectCard(id)
    };
    const nextClick = () => {
        const { yesCount, noCount } = countYesNo();
        if (selectCard) {
            navigate(`/final?id=parents&visa=${selectCard}&y=${yesCount}&n=${noCount}`)
        }
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 三組 Yes/No 狀態，使用陣列來表示每一組
    const [YesNo, setYesNo] = useState([
        [null, null, null, null, null],

        [null, null, null, null, null, null]
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
                <div className={`card ${selectCard === "103" ? 'selected' : ''}`}
                    onClick={() => { cardClick("103") }}>
                    <img src={visaImage} alt="" />
                    <h2>103 <br />排隊父母簽證</h2>
                </div>
                <div className={`card ${selectCard === "143" ? 'selected' : ''}`}
                    onClick={() => { cardClick("143") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>143 <br />付費父母簽證</h2>
                </div>

            </div>

            <div className="info">

                {selectCard === "103" && (
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
                                <td>103 排隊父母簽證</td>
                                <td>
                                    <ul>
                                        <li>"子女"為澳洲公民／永久居留或居住澳洲的紐西蘭公民</li>
                                        <li>"子女"在澳洲生活至少 2 年以上</li>
                                        <li>"父母"未持有臨時簽證</li>
                                        <li>"父母"至少有一半以上的子女需要永久居住在澳洲</li>
                                        <li>"父母"不依賴政府福利金生活</li>
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
                {selectCard === "143" && (
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
                                <td>143 付費父母簽證</td>
                                <td>
                                    <ul>
                                        <li>"子女"為澳洲公民／永久居留或居住澳洲的紐西蘭公民</li>
                                        <li>"子女"在澳洲生活至少 2 年以上</li>
                                        <li>"子女"繳納保證金並存放銀行 10 年，並在簽證核准前須繳交規費</li>
                                        <li>"父母"未持有臨時簽證</li>
                                        <li>"父母"至少有一半以上的子女需要永久居住在澳洲</li>
                                        <li>"父母"不依賴政府福利金生活</li>
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

export default Parents;