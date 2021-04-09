import { useEffect } from "react";
import Menu from "./components/Menu";
import './styles/App.scss';
import Channel from "./views/Channel";

import { SocketContext, socket } from './service/socket.js';

import { useStore } from './store/store.js'

function App() {

  // const socketRef = useRef();
  // socket = 

  const setUsers = useStore((state) => state.setUsers);

  const statemessages = useStore((state) => state.messages);
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

    socket.on('new-message', (messages) => {
      console.log(messages)
      setMessages(messages);
      console.log(statemessages)
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
          <Channel />
        </SocketContext.Provider>
      </div>
    </div>
  );
}

export default App;
