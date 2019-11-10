import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { Howl } from 'howler';


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
  color: lawngreen;
`;

const InstructionText = styled.span`
  color: lawngreen;
  font-size: 1.5em;
`;

const StyledButton = styled.button`
  box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:6px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  text-shadow:0px 1px 0px #1570cd;
  &:hover {
    background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
  }
  &:active {
    position:relative;
	top:1px;
  }
`;

const CreateOwnTextContainer = styled.div`
  position: absolute;
  text-align: center;
  bottom: 7em;
  right: 0.5em;
  width: 10em;
`;

const CreateOwnText = styled.a`
  font-size: 1em;
  color: yellow;
  text-decoration: none;
`;

const urlArray = window.location.href.split('/');
const nameVal = urlArray[urlArray.length - 1].replace(new RegExp('%20', 'g'), ' ');

const music = new Howl({
  src: [JingleBellsMP3]
});

function App() {
  useEffect(() => {
    startLanguageChangeTimer();
    music.play();
    changeAnimations();
  }, []);

  const [christmasText, setChristmasText] = useState('Merry Christmas');
  const [whitePresentClass, setWhitePresentClass] = useState('animated bounceInUp');
  const [bluePresentClass, setBluePresentClass] = useState('animated bounceInUp');
  const [pinkPresentClass, setPinkPresentClass] = useState('animated bounceInUp');
  const [hollyClass, setHollyClass] = useState('animated flipInX');
  const [nameInput, setNameInput] = useState('');
  const [linkGenerated, setLinkGenerated] = useState(false);
  let count = 0;

  const changeAnimations = () => {
    setTimeout(() => {
      setWhitePresentClass('animated infinite pulse');
      setBluePresentClass('animated infinite pulse slow');
      setPinkPresentClass('animated infinite pulse slower');
      setHollyClass('animated infinite flip slow');
    }, 2000);
  };

  const merryChristmasVariations = [
    'Joyeux Noël', 'Frohe Weihnachten', 'Buon Natale', 'Meri Kurisumasu',
    'Blithe Yule', 'Feliz Navidad', 'Nollaig Shona Dhuit', 'Boas Festas',
    'Zalig Kerstfeest', 'Wesolych Swiat', 'Eftihismena Christougenna', 'Sretan Bozic',
    'Craciun Fericit', 'Merii Kurisumasu', 'S̄uk̄hs̄ạnt̒ wạn khris̄t̒mās̄', 'Sung Tan Chuk Ha',
    'Chuc Mung Giang Sinh', 'Maligayang Pasko', 'Glaedelig Jul', 'Mele Kalikimaka',
    'Gleðileg jól', 'Hyvaa joulua', 'Kala Christouyenna', 'Merry Christmas'
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

  const generateLink = () => {
    setLinkGenerated(true);
  };

  const copyLink = () => {
    copy(window.location.href + nameInput);
    toast.success('Link copied to clipboard!');
  };

  const getHref = () => {
    return window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://merry-christmas-dfa9c.web.app/';
  };

  return (
    <Container>
      <Snow></Snow>
      <TripleHolly src={TripleHollyPNG} alt='triple holly' className={hollyClass} />
      <DoubleHolly src={DoubleHollyPNG} alt='double holly' className={hollyClass} />
      <ChristmasTree src={ChristmasTreePNG} alt='christmas tree' className='animated slideInLeft' />
      <WhitePresent src={WhitePresentPNG} alt='white present' className={whitePresentClass} />
      <PinkPresent src={PinkPresentPNG} alt='pink present' className={bluePresentClass} />
      <BluePresent src={BluePresentPNG} alt='blue present' className={pinkPresentClass} />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '8em' }}
        className='animated infinite bounce' />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '4.5em' }}
        className='animated infinite bounce slow' />
      <CandyCane src={CandyCanePNG} alt='candy cane' style={{ right: '1em' }}
        className='animated infinite bounce slower' />
      {nameVal !== '' &&
        <div>
          <TextContainer>
            <span style={{ fontSize: '1.5em', color: 'yellow' }}>Thinking of you this holiday season and wanted to say...</span>
            <br />
            <br />
            <div className='animated infinite pulse'>
              <Text style={{ fontSize: '3em' }}>{christmasText}</Text>
              <br />
              <Text style={{ fontSize: '3em' }}>{nameVal}!</Text>
            </div>
          </TextContainer>
          <CreateOwnTextContainer>
            <CreateOwnText href={getHref()}>
              Click here to send a greeting to someone else!
            </CreateOwnText>
          </CreateOwnTextContainer>
        </div>
      }
      {nameVal === '' && !linkGenerated &&
        <TextContainer>
          <InstructionText className='animated infinite pulse'>Enter someone's name to create their personalized
           Christmas greeting in over 20 languages!</InstructionText>
          <br />
          <br />
          <input value={nameInput} onChange={e => setNameInput(e.target.value)} type='text'
            maxLength='30' placeholder='enter name here' style={{ width: '70%' }} />
          <br />
          <StyledButton onClick={() => generateLink()}>Generate Greeting Link</StyledButton>
        </TextContainer>
      }
      {nameVal === '' && linkGenerated &&
        <TextContainer>
          <InstructionText>Copy and send the link below!</InstructionText>
          <br />
          <br />
          <InstructionText style={{ color: 'yellow', fontWeight: 'bold' }}>{window.location.href + nameInput}</InstructionText>
          <br />
          <br />
          <StyledButton onClick={() => copyLink()}>Copy Link</StyledButton>
        </TextContainer>
      }
      <ToastContainer />
    </Container>
  );
}

export default App;