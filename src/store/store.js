import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = (set) => ({
  currentuser: { username: '', token: '' },
  setUser: (user) => {
    //something
  }
});

export default create(devtools(useStore));