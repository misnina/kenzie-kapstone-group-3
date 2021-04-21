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

  const currentUser = useStore((state) => state.currentuser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const toggleLogin = useStore((state) => state.toggleLogin);

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

    socket.on('login', (user) => {
      console.log(user);
      setCurrentUser(user);
      if (!isLoggedIn) {
        toggleLogin(isLoggedIn);
      }
      console.log('afterlogin', currentUser);
    });

    socket.on('logout', () => {
      setCurrentUser({username: ''});
      if (isLoggedIn) {
        toggleLogin(isLoggedIn);
      }
    })

    socket.on('new-user', (users) => setUsers(users));
    socket.on('delete-user', (users) => setUsers(users));
    socket.on('update-user', (users) => setUsers(users));
    socket.on('add-friend', (users) => setUsers(users));

    socket.on('new-message', (messages) => {
      // const cloneMessages = [...messages];
      // cloneMessages.push(message);
      console.log(messages);
      setMessages(messages);
    });

    socket.on('get-messages', (newMessages) => {
      setMessages(newMessages);
    });

    socket.on('toast-error', (message) => {
      console.log(message);
    })
    return () => {
      socket.off('get-messages');
      socket.off('new-messages');
      socket.off('login');
      socket.off('logout');
    }
  }, []);

  return (
    <div id="App">
      <Menu />
      <div id="main-area">
        <SocketContext.Provider value={socket}>
          <Switch>


            <Route 
              path="/general" 
              render={() => ( <Channel name='general' currentUser={currentUser} /> )}
            />
            <Route 
              path="/books" 
              render={() => ( <Channel name='books' /> )}
            />
            <Route 
              path="/gaming" 
              render={() => ( <Channel name='gaming' /> )}
            />

            {!isLoggedIn ? 
              <Route exact path="/" component={Home} />
            : <Route 
              path="/"
              component={Profile}
            />}
          </Switch>
        </SocketContext.Provider>
      </div>
    </div>
  );
}

export default App;
