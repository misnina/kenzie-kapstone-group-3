import io from "socket.io-client";
import React from 'react';

export const socket = io.connect('ws://infinite-beach-71989.herokuapp.com:80', { transports : ['websocket'] });
export const SocketContext = React.createContext(socket);