import { useState } from 'react';
import './App.css'
import Card from './Card'
import { tutorialData } from './TutorialData.mjs'

function App() {

  const [ step, setStep ] = useState(0);

  function handleClickNext() {
    nextStep();
  }
  function handleClickPrev() {
    prevStep()
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
      />
    </div>
  )
}

export default App
