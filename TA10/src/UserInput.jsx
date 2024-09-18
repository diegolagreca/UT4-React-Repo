import { useContext } from 'react';
import UserContext from './UserContext';  // Importar el contexto

function UserInput() {
  const { userName, setUserName } = useContext(UserContext);  // Acceder solo al nombre y función

  // Función para manejar el cambio en el input
  const handleChange = (event) => {
    setUserName(event.target.value);  // Actualizar el nombre en el contexto
  };

  return (
    <div>
      <input
        type="text"
        value={userName}  // Mostrar el valor actual del contexto
        onChange={handleChange}  // Actualizar el contexto en tiempo real
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}

export default UserInput;
