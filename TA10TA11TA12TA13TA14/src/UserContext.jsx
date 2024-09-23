import { createContext } from 'react';

// Creamos el contexto que incluye tanto el nombre como la función para actualizarlo
const UserContext = createContext({
  userName: '',
  setUserName: () => {}
});

export default UserContext;
