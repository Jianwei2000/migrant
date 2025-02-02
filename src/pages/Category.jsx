import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import skilledImage from "../images/skilled.jpg";
import bossImage from "../images/boss.jpg";
import employerImage from "../images/employer.jpg";
import parentsImage from "../images/parents.jpg";
import marryImage from "../images/marry.jpg";
import { useState } from "react";
import AnimalMove from "../components/AnimalMove";

function Category() {
    const navigate = useNavigate();
    const [selectCard, setSelectCard] = useState(null);
    const cardClick = (id) => { setSelectCard(id) };
    const nextClick = () => {
        if (selectCard) {
            navigate(`/${selectCard}`)
        }
    };
    return (
        <>
            <AnimalMove />
            <div className="container">
                <ProgressBar />

                <div className="select-cards">
                    <div className={`card ${selectCard === 'skilled' ? 'selected' : ''}`}
                        onClick={() => { cardClick("skilled") }}>
                        <img src={skilledImage} alt="" />
                        <div className="card-text">技術移民</div>
                    </div>
                    <div className={`card ${selectCard === 'boss' ? 'selected' : ''}`}
                        onClick={() => { cardClick("boss") }}>
                        <img src={bossImage} alt="" />
                        <div className="card-text">商業投資移民</div>
                    </div>
                    <div className={`card ${selectCard === 'employer' ? 'selected' : ''}`}
                        onClick={() => { cardClick("employer") }}>
                        <img src={employerImage} alt="" />
                        <div className="card-text">雇主擔保移民</div>
                    </div>
                    <div className={`card ${selectCard === 'parents' ? 'selected' : ''}`}
                        onClick={() => { cardClick("parents") }}>
                        <img src={parentsImage} alt="" />
                        <div className="card-text">父母依親移民</div>
                    </div>
                    <div className={`card ${selectCard === 'marry' ? 'selected' : ''}`}
                        onClick={() => { cardClick("marry") }}>
                        <img src={marryImage} alt="" />
                        <div className="card-text">配偶擔保移民</div>
                    </div>
                </div>

                <div className="page-control">
                    <button onClick={() => { navigate("/"); }}><i className="fa-solid fa-left-long"></i> 返回</button>
                    <button disabled={!selectCard} onClick={nextClick}>下一步 <i className="fa-solid fa-right-long"></i></button>
                </div>
            </div>
        </>
    )
}

export default Category;