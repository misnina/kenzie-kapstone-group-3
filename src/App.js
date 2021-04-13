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
        <Route exact path ="/" component={Home} />
        <Route path="/profile" component={Profile}/>   
        <Route path="/general" component={General}/>
        <Route path="/books" component={Books}/>   
        <Route path="/tv" component={Tv}/>
        <Route path ="/gaming" component={Gaming}/>
      </div>
    </div>
  );
}

export default App;
