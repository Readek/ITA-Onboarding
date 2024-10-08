import { useState } from 'react';
import './App.css'
import Card from './Card'
import { tutorialData } from './TutorialData.mjs'

function App() {

  const [ step, setStep ] = useState(0);

  function handleClick() {
    nextStep();
  }

  /** Updates to the next step or goes back to the first if at end */
  function nextStep() {
    if (step == tutorialData.length - 1) {
      setStep(0);
    } else {
      setStep(step+1);
    }
  }

  return (
    <div className=''>
      <Card
        title={tutorialData[step].title}
        desc={tutorialData[step].description}
        bgCol={tutorialData[step].bgColor}
        img={tutorialData[step].image}
        clickEv={handleClick}
      />
    </div>
  )
}

export default App
