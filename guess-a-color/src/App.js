import { useEffect, useState } from 'react';
import ListOfButtons from './components/listOfButtons';
import MainDiv from './components/mainDiv';
import { getRandomColor } from './components/randomColorGenerator';
import ScoreField from './components/score';
import Solution from './components/solution';

function App() {
  const [hexColor, setHexColor] = useState(null);
  const [correctButtonIndex, setCorrectButtonIndex] = useState(null);
  const [yourScore, setYourScore] = useState(0);
  const [yourStreak, setYourStreak] = useState(0);
    
  useEffect(() => {
    const color = getRandomColor();
    setHexColor(color);
    setCorrectButtonIndex(Math.floor(Math.random() * 3));
  }, []);

  const handleButtonClick = (index) => {
    setHexColor(getRandomColor())
    setCorrectButtonIndex(Math.floor(Math.random() * 3))
    if (index) setYourScore(yourScore+1)
    index ? setYourStreak(yourStreak+1) : setYourStreak(0)
  }

  useEffect(() => {
    document.title = `Score: ${yourScore}, streak: ${yourStreak}`;
  }, [yourScore, yourStreak])


  return (
    <div
    style={{
      marginTop: "50px",
    }}>
      <MainDiv hexColor = {hexColor}/>
      <ListOfButtons hexColor = {hexColor} correctButtonIndex={correctButtonIndex} handleButtonClick={handleButtonClick}/>
      <ScoreField yourScore={yourScore} yourStreak={yourStreak}/>
      <Solution hexColor={hexColor} correctButtonIndex={correctButtonIndex}/>
    </div>
  );
}

export default App;
