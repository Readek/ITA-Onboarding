import { useState } from 'react';
import './App.css'
import Card from './Card'
import { tutorialData } from './TutorialData.mjs'

function App() {

  const [ step, setStep ] = useState(0);
  const [ cardAnim, setCardAnim] = useState("");

  async function handleClickNext() {
    setCardAnim("swipeLeftOut .25s both, fadeOut .25s both");
    await new Promise(resolve => setTimeout(resolve, 250));
    nextStep();
    setCardAnim("swipeRightIn .25s both, fadeIn .25s both")
  }
  async function handleClickPrev() {
    setCardAnim("swipeRightOut .25s both, fadeOut .25s both");
    await new Promise(resolve => setTimeout(resolve, 250));
    prevStep();
    setCardAnim("swipeLeftIn .25s both, fadeIn .25s both")
  }

  /** Updates to the next step or goes back to the first if at end */
  function nextStep() {
    if (step == tutorialData.length - 1) {
      setStep(0);
    } else {
      setStep(step+1);
    }
  }

  /** Updates to the next step or goes back to the first if at end */
  function prevStep() {
    if (step == 0) {
      setStep(tutorialData.length - 1);
    } else {
      setStep(step-1);
    }
  }

  function forceStep(num) {
    setStep(num);
  }

  return (
    <div className=''>
      <Card
        title={tutorialData[step].title}
        desc={tutorialData[step].description}
        bgCol={tutorialData[step].bgColor}
        img={tutorialData[step].image}
        nextEv={handleClickNext}
        prevEv={handleClickPrev}
        count={step}
        maxCount={tutorialData.length}
        setCount={forceStep}
        anim={cardAnim}
      />
    </div>
  )
}

export default App
