import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const toggleMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (  
    <div>
      <button onClick={toggleMessage}>
        {isMessageVisible ? 'Hide Component' : 'Show Component'}
      </button>

      {isMessageVisible && (
        <div>
          <p>Hi! How are You!!!</p>
        </div>
      )}
    </div>
  );
};

export default ToggleMessage;
