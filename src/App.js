import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SnowFallingGIF from './assets/snow_falling.gif';
import 'animate.css';
import WhitePresentPNG from './assets/white_present.png';
import BluePresentPNG from './assets/blue_present.png';
import PinkPresentPNG from './assets/pink_present.png';
import DoubleHollyPNG from './assets/double_holly.png';
import TripleHollyPNG from './assets/triple_holly.png';
import ChristmasTreePNG from './assets/christmas_tree.png';
import CandyCanePNG from './assets/candy_cane.png';
import JingleBellsMP3 from './assets/jingle_bells.mp3';
import JingleBellsOGG from './assets/jingle_bells_ogg.ogg';


const vpInnerHeight = window.innerHeight;
const vpInnerWidth = window.innerWidth;

const Container = styled.div`
  position: relative;
`;

const Snow = styled.div`
  position: relative;
  width: ${vpInnerWidth}px;
  height: ${vpInnerHeight}px;
  top: 0;
  left: 0;
  background: url(${SnowFallingGIF});
`;

const Absolute = styled.img`
  position: absolute;
`;

const Present = styled(Absolute)`
  width: auto;
  bottom: 0;
`;

const WhitePresent = styled(Present)`
  height: 4em;
  left: 0;
`;

const BluePresent = styled(Present)`
  height: 3em;
  left: 2em;
`;

const PinkPresent = styled(Present)`
  height: 3.5em;
  left: 5em;
`;

const DoubleHolly = styled(Absolute)`
  width: auto;
  right: 0;
  top: 0;
  height: 4em;
`;

const TripleHolly = styled(Absolute)`
  width: auto;
  left: -1.5em;
  top: -1em;
  height: 6em;
`;

const ChristmasTree = styled(Absolute)`
  left: -2em;
  bottom: 0em;
  height: 25em;
`;

const CandyCane = styled(Absolute)`
  bottom: 0em;
  height: 5em;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 15%;
  text-align: center;
`;

const Text = styled.span`
  color: green;
  font-size: 3em;
`;

const urlArray = window.location.href.split('/');
const nameVal = urlArray[urlArray.length - 1];

function App() {
  useEffect(() => {
    startLanguageChangeTimer();
  }, []);
  const [christmasText, setChristmasText] = useState('Merry Christmas');
  let count = 0;

  const merryChristmasVariations = [
    'Joyeux Noël', 'Frohe Weihnachten', 'Buon Natale', 'Meri Kurisumasu',
    'Blithe Yule', 'Feliz Navidad', 'Merry Christmas'
  ];

  const startLanguageChangeTimer = () => {
    setTimeout(() => {
      if (count === merryChristmasVariations.length) {
        count = 0;
      }
      setChristmasText(merryChristmasVariations[count]);
      count += 1;
      startLanguageChangeTimer();
    }, 1500);
  };

  return (
    <Container>
      <Snow></Snow>
      <TripleHolly src={TripleHollyPNG} alt='triple holly' className='animated flipInX' />
      <DoubleHolly src={DoubleHollyPNG} alt='double holly' className='animated flipInX' />
      <ChristmasTree src={ChristmasTreePNG} alt='christmas tree' className='animated slideInLeft' />
      <WhitePresent src={WhitePresentPNG} alt='white present' className='animated bounceInUp' />
      <PinkPresent src={PinkPresentPNG} alt='pink present' className='animated bounceInUp' />
      <BluePresent src={BluePresentPNG} alt='blue present' className='animated bounceInUp' />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '8em' }}
        className='animated infinite bounce' />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '4.5em' }}
        className='animated infinite bounce slow' />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '1em' }}
        className='animated infinite bounce slower' />
      <TextContainer className='animated infinite pulse'>
        <Text>{christmasText}</Text>
        <br />
        <Text>{nameVal}{nameVal !== '' ? '!' : ''}</Text>
      </TextContainer>
      <audio autoPlay loop>
        <source src={JingleBellsOGG} type="audio/ogg" />
        <source src={JingleBellsMP3} type="audio/mp3" />
      </audio>
    </Container>
  );
}

export default App;