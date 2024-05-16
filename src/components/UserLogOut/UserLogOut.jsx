import React from 'react';

function UserLogOut({ user, setUser }) {
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <span>{user.name}</span>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default UserLogOut;