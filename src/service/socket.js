import io from "socket.io-client";
import React from 'react';

export const socket = io("https://dry-spire-38380.herokuapp.com/", {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Origin": "https://dry-spire-38380.herokuapp.com",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  }
});
export const SocketContext = React.createContext(socket);