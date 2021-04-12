import Menu from "./components/Menu";
import './styles/App.scss';
import Channel from "./views/Channel";

import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'
import Message from './components/Message/Message'
import General from './views/General/General'
import Books from './views/Books/Books'
import Tv from './views/Tv/Tv'
import Gaming from './views/Gaming/Gaming'


function App() {
  return (
    <div id="App">
      <Menu />
      <div id="main-area">
         <Channel />

         
      </div>
    </div>
  );
}

export default App;
