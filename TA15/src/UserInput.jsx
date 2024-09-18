import { useContext, useState } from 'react';
import UserContext from './UserContext';
import { LanguageContext } from './LanguageContext';

function UserInput() {
  const { userName, setUserName } = useContext(UserContext);
  const { language, translations } = useContext(LanguageContext);
  const [inputValue, setInputValue] = useState(userName);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    setUserName(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={translations[language].userName}
      />
      <button onClick={handleSave}>
        {translations[language].userName}
      </button>
    </div>
  );
}

export default UserInput;
