import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import thinkingImage from "../images/thinking.png";
import visaImage from "../images/visa.jpg";
import AnimalMove from "../components/AnimalMove";

function Skilled() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => {
        setYesNo([
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ]);
        setSelectCard(id)
    };
    const nextClick = () => {
        const { yesCount, noCount } = countYesNo();
        if (selectCard) {
            navigate(`/final?id=skilled&visa=${selectCard}&y=${yesCount}&n=${noCount}`)
        }
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 三組 Yes/No 狀態，使用陣列來表示每一組
    const [YesNo, setYesNo] = useState([
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null]
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
                <div className={`card ${selectCard === "189" ? 'selected' : ''}`}
                    onClick={() => { cardClick("189") }}>
                    <img src={visaImage} alt="" />
                    <h2>189 <br />獨立技術簽證</h2>
                </div>
                <div className={`card ${selectCard === "190" ? 'selected' : ''}`}
                    onClick={() => { cardClick("190") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>190 <br />州擔保技術簽證</h2>
                </div>
                <div className={`card ${selectCard === "191" ? 'selected' : ''}`}
                    onClick={() => { cardClick("191") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>191 <br />偏遠地區技術簽證</h2>
                </div>
            </div>

            <div className="info">

                {selectCard === "189" && (
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
                                <td>189 獨立技術移民簽證</td>
                                <td>
                                    <ul>
                                        <li>年齡：18～44歲</li>
                                        <li>EOI分數：65分以上</li>
                                        <li>語言能力：最低要求IELTS四個6</li>
                                        <li>職業類別：職業需在中長期技術職業清單上&nbsp;&nbsp;<a target="_blank" href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">參考網址</a></li>
                                        <li>工作經歷：1～10年</li>
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
                {selectCard === "190" && (
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
                                <td>190 州擔保技術移民永居簽證</td>
                                <td>
                                    <ul>
                                        <li>年齡：18～44歲</li>
                                        <li>EOI分數：65分以上</li>
                                        <li>語言能力：最低要求IELTS四個6</li>
                                        <li>職業類別：職業需在中長期技術職業清單上&nbsp;&nbsp;<a target="_blank" href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">參考網址</a></li>
                                        <li>工作經歷：申請成功後需在擔保的州定居2年</li>
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
                {selectCard === "191" && (
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
                                <td>191 偏遠地區州擔保或親屬擔保臨時工作簽證</td>
                                <td>
                                    <ul>
                                        <li>年齡：18～44歲</li>
                                        <li>EOI分數：65分以上</li>
                                        <li>語言能力：最低要求IELTS四個6</li>
                                        <li>職業類別：職業符合中長期技術職業、偏遠地區職業列表&nbsp;&nbsp;<a target="_blank" href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">參考網址</a></li>
                                        <li>工作經歷：在雪梨、墨爾本、布里斯本以外的偏遠地區工作與居住至少 3 年以上</li>
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
};


export default Skilled;