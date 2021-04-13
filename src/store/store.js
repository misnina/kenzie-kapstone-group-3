import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(devtools((set) => ({
  users: [],
  setUsers: (updatedUsers) => set({ users: updatedUsers }),

  messages: [],
  setMessages: (updatedMessages) => set({ messages: updatedMessages }),

  currentuser: { username: '', token: '' },
  setUser: (user) => {
    //something
  }
})));