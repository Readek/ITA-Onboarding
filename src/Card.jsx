import './Card.css'

export function Card({ title, desc, bgCol, img, clickEv, count }) {

    const progress = [];

    // progress dots, active if count matches loop count
    for (let i = 0; i < 3; i++) { // hardcoded to 3 steps
        let classText = "onboardingCardProgress";
        if (count == i) {
           classText += ' onboardingCardProgressActive';
        }
        progress.push(<div className={classText}></div>)
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
                    <button className="onboardingCardBtnNext" onClick={clickEv}>Next</button>
                </div>
            </div>
        </div>
    )

}

export default Card