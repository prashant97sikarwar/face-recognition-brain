import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const ParticlesOptions = {
  particles: {
    number: {
      value : 118,
      density : {
        enable : true,
        value_area: 950
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={ParticlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm/>
  
          {/*<Logo />
          <Imagination /> 
          <FaceRecogntion /> */}
      </div>
    );
  }
}


export default App;
