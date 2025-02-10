import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const [mode, setMode] = useState(1);
  const [display, setDisplay] = useState('');

  useEffect(() => 
    {
      
      function handleKeyDown(event){

        const {key} = event;
        let id;

        switch(key.toUpperCase()){
        case "Q":
          id = "Heater-1"
          break;
        case "W":
          id = "Heater-2"
          break;
        case "E":
          id = "Heater-3"
          break;
        case "A":
          id = "Heater-4"
          break;
        case "S":
          id = "Clap"
          break;
        case "D":
          id = "Open-HH"
          break;
        case "Z":
          id = "Kick-n' -Hat"
          break;
        case "X":
          id = "Kick"
          break;
        case "C":
          id = "Closed-HH"
          break;
        default:
          return;
        }
        
        const audioToPlay = document.getElementById(key.toUpperCase());
        
        if(power){
          audioToPlay.play();
        }

        setDisplay(id);
        

      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };


    },[power])

  function handleClickPower(){

    const toDisplay = !power ? "Power On": "Power Off";
    setPower(!power)
    setDisplay(toDisplay)

  }

  function handleClickAudios(event){

    const id = event.target.id;
    const keyPressed = event.target.innerText;
    const audioToPlay = document.getElementById(keyPressed);

    if(power){
      audioToPlay.play();
    }
    
    setDisplay(id)

  }

  
  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className='Buttons'>
          
          <button className = "drum-pad" id="Heater-1" onClick={handleClickAudios}>Q<audio id = "Q" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio></button>
          <button className = "drum-pad" id="Heater-2" onClick={handleClickAudios}>W<audio id = "W" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio></button>
          <button className = "drum-pad" id="Heater-3" onClick={handleClickAudios}>E<audio id = "E" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio></button>
          
          <button className = "drum-pad" id="Heater-4" onClick={handleClickAudios}>A<audio id = "A" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio></button>
          <button className = "drum-pad" id="Clap" onClick={handleClickAudios}>S<audio id = "S" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio></button>
          <button className = "drum-pad" id="Open-HH" onClick={handleClickAudios}>D<audio id = "D" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio></button>
          
          <button className = "drum-pad" id="Kick-n'-Hat" onClick={handleClickAudios}>Z<audio id = "Z" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio></button>
          <button className = "drum-pad" id="Kick" onClick={handleClickAudios}>X<audio id = "X" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio></button>
          <button className = "drum-pad" id="Closed-HH" onClick={handleClickAudios}>C<audio id = "C" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio></button>
          
        </div>
        <div className='Settings'>
          <div className="row1">
            <p>Power</p>
            <label class="switch">
              <input type="checkbox" onClick={handleClickPower} />
              <span class="slider"></span>
            </label>
          </div>
          <div className="row2">
            <p id="display">{display}</p>
          </div>
          <div className='row3'>
            <input type="range" id="points" name="points" min="0" max="100"></input>
          </div>
          <div className="row4">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
