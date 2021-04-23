import io from "socket.io-client";
import React from 'react';

export const socket = io("http://dry-spire-38380.herokuapp.com", {
  extraHeaders: {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Origin": "http://dry-spire-38380.herokuapp.com",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
  }
});
export const SocketContext = React.createContext(socket);