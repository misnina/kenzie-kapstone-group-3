import { Route, Switch } from 'react-router-dom';
import { useEffect } from "react";
import Menu from "./components/Menu";
import './styles/App.scss';

import Channel from "./views/Channel";
import Home from './views/Home';
import Profile from './views/Profile';

import { SocketContext, socket } from './service/socket.js';

import { useStore } from './store/store.js'


function App() {

  // const socketRef = useRef();
  // socket = 

  const setUsers = useStore((state) => state.setUsers);

  const messages = useStore((state) => state.messages);
  const setMessages = useStore((state) => state.setMessages);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Connection made to server")
    });

    socket.on('disconnect', () => {
      console.log("Connection to server lost")
      socket.removeAllListeners();
    });

    socket.on('new-user', (users) => setUsers(users));
    socket.on('delete-user', (users) => setUsers(users));
    socket.on('update-user', (users) => setUsers(users));
    socket.on('add-friend', (users) => setUsers(users));

    socket.on('new-message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('get-messages', (messages) => {
      setMessages(messages);
    });


    return () => {
      socket.off()
    }
  }, []);

  function sendMessage(message) {
    socket.emit('new-message', message)
  }

  return (
    <div id="App">
      <Menu />
      <div id="main-area">
        <SocketContext.Provider value={socket}>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/general" render={() => ( <Channel name='general' /> )} />
            <Route path="/books" render={() => ( <Channel name='books' /> )} />
            <Route path="/tv" render={() => ( <Channel name='tv' /> )} />
            <Route path="/gaming" render={() => ( <Channel name='gaming' /> )} />
            <Route exact path="/" component={Home} />
          </Switch>
        </SocketContext.Provider>
      </div>
    </div>
  );
}

export default App;
