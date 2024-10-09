import './Card.css'

export function Card({ title, desc, bgCol, img, nextEv, prevEv, count, maxCount, setCount }) {

    // progress dots, active if count matches loop count
    const progress = [];
    for (let i = 0; i < maxCount; i++) {
        let classText = "onboardingCardProgress";
        if (count == i) {
           classText += ' onboardingCardProgressActive';
        }
        progress.push(<div className={classText} onClick={() => {setCount(i)}}></div>)
    }

    return(
        <div className="onboardingCard">
            <img className="onboardingCardImg" style={{backgroundColor: bgCol}} src={img} alt="Card's image" />
            <div className='onboardingCardTextDiv'>
                <div className="onboardingCardTitle">{title}</div>
                <div className="onboardingCardDesc">{desc}</div>
            </div>
            <div className='onboardingCardBottomDiv'>
                <div className='onboardingCardProgressDiv'>
                    {progress}
                </div>
                <div className='onboardingCardBtnDiv'>
                    {count > 0 && <button className="onboardingCardBtnPrev" onClick={prevEv}>Prev</button>}
                    {count < maxCount - 1 && <button className="onboardingCardBtnNext" onClick={nextEv}>Next</button>}
                </div>
            </div>
        </div>
    )

}

export default Card