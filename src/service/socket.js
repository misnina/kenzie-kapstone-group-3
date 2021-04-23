import io from "socket.io-client";
import React from 'react';

export const socket = io("https://dry-spire-38380.herokuapp.com/", {
  withCredentials: true
});
export const SocketContext = React.createContext(socket);