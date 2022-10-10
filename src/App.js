import logo from './logo.svg';
import './App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import underConstructionAnimation from './assets/animations/under-construction.json';

function App() {
  return (
    <div className="App">
      <div className='name-placeholder'>CityMiner</div>

      <Player
        autoplay
        loop
        src={underConstructionAnimation}
        style={{ height: '50vh', width: 'auto', }}
      >

      </Player>
    </div>
  );
}

export default App;
