import './App.css';
import React from 'react';

const initialState = {power: false,
  volume: 50,
  mode: 1,
  display: ''
};

class DrumMachine extends React.Component{
  constructor(props){

    super(props);
    this.state = initialState;
    this.handleClickAudios = this.handleClickAudios.bind(this);
    this.handleClickPower = this.handleClickPower.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress);
  }

  handleKeyPress(e){

    const keyPressed = e.key.toUpperCase();
    let id;

    switch(keyPressed){
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
    
    const audioToPlay = document.getElementById(keyPressed);
    
    if(this.state.power){
      audioToPlay.play();
    }

    this.setState(prevState=>{return {power: prevState.power,
      volume: prevState.volume,
      mode: prevState.mode,
      display: id,
    }});

  }

  handleClickAudios(e){

    const id = e.target.id;
    const keyPressed = e.target.innerText;
    const audioToPlay = document.getElementById(keyPressed);

    if(this.state.power){
      audioToPlay.play();
    }
    
    this.setState(prevState=>{return {power: prevState.power,
      volume: prevState.volume,
      mode: prevState.mode,
      display: id,
    }});

  }

  handleClickPower(){

    const toDisplay = !this.state.power ? "Power On": "Power Off";
    this.setState(prevState=>{return {power: !prevState.power,
      volume: prevState.volume,
      mode: prevState.mode,
      display: toDisplay,
    }});

  }

  

  render(){
    return <div className="drum-machine" id="drum-machine">
        <div className='Buttons'>
          
          <button className = "drum-pad" id="Heater-1" onClick={this.handleClickAudios}>Q<audio id = "Q" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio></button>
          <button className = "drum-pad" id="Heater-2" onClick={this.handleClickAudios}>W<audio id = "W" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio></button>
          <button className = "drum-pad" id="Heater-3" onClick={this.handleClickAudios}>E<audio id = "E" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio></button>
          
          <button className = "drum-pad" id="Heater-4" onClick={this.handleClickAudios}>A<audio id = "A" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio></button>
          <button className = "drum-pad" id="Clap" onClick={this.handleClickAudios}>S<audio id = "S" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio></button>
          <button className = "drum-pad" id="Open-HH" onClick={this.handleClickAudios}>D<audio id = "D" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio></button>
          
          <button className = "drum-pad" id="Kick-n'-Hat" onClick={this.handleClickAudios}>Z<audio id = "Z" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio></button>
          <button className = "drum-pad" id="Kick" onClick={this.handleClickAudios}>X<audio id = "X" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio></button>
          <button className = "drum-pad" id="Closed-HH" onClick={this.handleClickAudios}>C<audio id = "C" className = "clip" src = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio></button>
          
        </div>
        <div className='Settings'>
          <div className="row1">
            <p>Power</p>
            <label class="switch">
              <input type="checkbox" onClick={this.handleClickPower} />
              <span class="slider"></span>
            </label>
          </div>
          <div className="row2">
            <p id="display">{this.state.display}</p>
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
  }
}

function App() {
  
  return (
    <div className="App">
      <DrumMachine/>
    </div>
  );
}

export default App;
