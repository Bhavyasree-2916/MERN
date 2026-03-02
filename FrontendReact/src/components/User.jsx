import React from 'react';

const User = ({ name, age, skills }) => {
  const handleClick = (user) => {
    alert(`hi ${user}`);
  };

  return (
    <>
      <div>User name = {name}</div>
      <h3>User age = {age}</h3>

      <button onClick={() => handleClick(name)}>
        Click
      </button>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default User;