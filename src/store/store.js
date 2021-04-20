import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(devtools(((set) => ({
  users: [],
  setUsers: (updatedUsers) => set({ users: updatedUsers }),

  messages: [],
  setMessages: (updatedMessages) => set({ messages: updatedMessages }),

  currentUser: { username: '', token: '' },
  setCurrentUser: (user, token) => set({ currentuser: { username: user.username, token} }),
}))));