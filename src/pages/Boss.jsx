import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import thinkingImage from "../images/thinking.png";
import visaImage from "../images/visa.jpg";
import AnimalMove from "../components/AnimalMove";

function Boss() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => {
        setYesNo([
            [null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null]
        ]);
        setSelectCard(id)
    };
    const nextClick = () => {
        const { yesCount, noCount } = countYesNo();
        if (selectCard) {
            navigate(`/final?id=boss&visa=${selectCard}&y=${yesCount}&n=${noCount}`)
        }
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 三組 Yes/No 狀態，使用陣列來表示每一組
    const [YesNo, setYesNo] = useState([
        [null, null, null, null, null],
        [null, null, null, null, null, null, null],
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
                <div className={`card ${selectCard === "188A" ? 'selected' : ''}`}
                    onClick={() => { cardClick("188A") }}>
                    <img src={visaImage} alt="" />
                    <h2>188A <br />創新移民簽證</h2>
                </div>
                <div className={`card ${selectCard === "188B" ? 'selected' : ''}`}
                    onClick={() => { cardClick("188B") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>188B <br />商業投資者簽證</h2>
                </div>
                <div className={`card ${selectCard === "188C" ? 'selected' : ''}`}
                    onClick={() => { cardClick("188C") }}
                >
                    <img src={visaImage} alt="" />
                    <h2>188C <br />重大投資者簽證</h2>
                </div>
            </div>

            <div className="info">

                {selectCard === "188A" && (
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
                                <td>188A 創新移民簽證</td>
                                <td>
                                    <ul>
                                        <li>年齡：18～55歲</li>
                                        <li>須在澳洲有 2 年以上直接經營或管理企業成功經歷</li>
                                        <li>總資產至少 125 萬澳幣</li>
                                        <li>在澳洲投資之企業年營業額若在 40 萬澳幣以下，須持股 51％ 以上</li>
                                        <li>在澳洲投資之企業年營業額若在 40 萬澳幣以上，則須持有 30％ 以上之股份</li>
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
                {selectCard === "188B" && (
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
                                <td>188B 商業投資者簽證</td>
                                <td>
                                    <ul>
                                        <li>年齡：18～55歲</li>
                                        <li>具備 3 年以上投資或公司管理經驗</li>
                                        <li>總資產至少 250 萬澳幣</li>
                                        <li>投資政府指定債券至少 150 萬澳幣</li>
                                        <li>申請前 5 年間至少有 1 年在澳洲投資超過 150 萬元或持有一間公司 10％ 以上股份並參與管理</li>
                                        <li>須獲得州政府擔保提名</li>
                                        <li>EOI 須達 65 分以上</li>
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
                {selectCard === "188C" && (
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
                                <td>188C 重大投資者簽證</td>
                                <td>
                                    <ul>
                                        <li>總資產至少 500 萬澳幣</li>
                                        <li>在澳洲政府指定領域投資至少 500 萬澳幣以上</li>
                                        <li>獲得州政府或者澳洲貿易委員會提名</li>
                                        <li>未曾從事非法投資或生意</li>
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

export default Boss;