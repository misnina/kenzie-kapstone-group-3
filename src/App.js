import { Route, Switch } from 'react-router';

import Menu from "./components/Menu";
import './styles/App.scss';
import Channel from "./views/Channel";

import Home from './views/Home';
import Profile from './views/Profile';
import Message from './views/Messages';
import General from './views/General';
import Books from './views/Books';
import Tv from './views/Tv';
import Gaming from './views/Gaming';


function App() {
  return (
    <div id="App">
      <Menu />
      <div id="main-area">
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/profile" component={Profile}/>   
          <Route path="/general" component={General}/>
          <Route path="/books" component={Books}/>   
          <Route path="/tv" component={Tv}/>
          <Route path ="/gaming" component={Gaming}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
