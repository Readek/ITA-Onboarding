import { useState } from 'react';
import './App.css'
import Card from './Card'
import { tutorialData } from './TutorialData.mjs'

function App() {

  const [ step, setStep ] = useState(0);

  return (
    <div className=''>
      <Card
        title={tutorialData[step].title}
        desc={tutorialData[step].description}
        bgCol={tutorialData[step].bgColor}
        img={tutorialData[step].image}
      />
    </div>
  )
}

export default App
