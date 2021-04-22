import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(devtools(((set) => ({
  users: [],
  setUsers: (updatedUsers) => set({ users: updatedUsers }),

  messages: [],
  setMessages: (updatedMessages) => set({ messages: updatedMessages }),

  isLoggedIn: false,
  toggleLogin: (prevState) => set({isLoggedIn: !prevState}),

  currentUser: { username: '', id: ''},
  setCurrentUser: (user) => set({ currentUser: { username: user.username, id: user._id } }),

  errorMessage: '',
  setErrorMessage: (newMessage) => set({ errorMessage: newMessage }),
}))));