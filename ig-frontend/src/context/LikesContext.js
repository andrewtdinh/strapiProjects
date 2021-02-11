import { useState, createContext, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export const LikesContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const loadLikesGiven = async () => {
        const response = await fetch(`http://localhost:1337/likes/given?user=${user.user.id}`, {
          headers: {
            'Authorization': `Bearer ${user.jwt}`
          }
        });
        const data = await response.json();
      }
    }
  }, [user])

  return (
    <LikesContext.Provider>
      { children }
    </LikesContext.Provider>
  )
}