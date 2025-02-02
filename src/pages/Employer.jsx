import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import thinkingImage from "../images/thinking.png";
import visaImage from "../images/visa.jpg";
import AnimalMove from "../components/AnimalMove";

function Employer() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => {
        setYesNo([
            [null, null, null, null],

            [null, null, null, null]
        ]);
        setSelectCard(id)
    };
    const nextClick = () => {
        const { yesCount, noCount } = countYesNo();
        if (selectCard) {
            navigate(`/final?id=employer&visa=${selectCard}&y=${yesCount}&n=${noCount}`)
        }
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 三組 Yes/No 狀態，使用陣列來表示每一組
    const [YesNo, setYesNo] = useState([
        [null, null, null, null],

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
                <div className={`card ${selectCard === "186" ? 'selected' : ''}`}
                    onClick={() => { cardClick("186") }}>
                    <img src={visaImage} alt="" />
                    <h2>186 <br />雇主擔保簽證</h2>
                </div>
                <div className={`card ${selectCard === "491" ? 'selected' : ''}`}
                    onClick={() => { cardClick("491") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>491 <br />偏遠地區擔保簽證</h2>
                </div>

            </div>

            <div className="info">

                {selectCard === "186" && (
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
                                <td>186 雇主擔保簽證</td>
                                <td>
                                    <ul>
                                        <li>未滿 45 歲</li>
                                        <li>雅思 4 個 6 或同等能力</li>
                                        <li>若先前持有澳洲臨時工作簽證，至少需為擔保之雇主工作滿 2 年以上，且不需通過職業技能評估</li>
                                        <li>若先前無澳洲臨時工作簽證，則必須具備同領域 3 年以上工作經驗，且職業須符合 STSOL，且必須通過政府的職業技能評估</li>
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
                {selectCard === "491" && (
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
                                <td>491 偏遠地區擔保簽證</td>
                                <td>
                                    <ul>
                                        <li>未滿 45 歲</li>
                                        <li>雅思 4 個 6 或同等能力</li>
                                        <li>獲得 EOI 邀請且分數須達 65 分以上</li>
                                        <li>職業須符合 SOL，且必須通過政府的職業技能評估</li>
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

export default Employer;