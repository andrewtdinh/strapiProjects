import { useState, createContext, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export const LikesContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const { user } = useContext(UserContext);
  const [ likesGiven, setLikesGiven ] = useState([]);
  const [ likesReceived, setLikesReceived ] = useState([]);

  const reloader = () => {
    const loadLikesGiven = async () => {
      const response = await fetch(`http://localhost:1337/likes/given?user=${user.user.id}`, {
        headers: {
          'Authorization': `Bearer ${user.jwt}`
        }
      });
      const data = await response.json();
      setLikesGiven(data);
    }
    loadLikesGiven();

    const loadLikesReceived = async () => {
      const response = await fetch(`http://localhost:1337/likes/received?post.author=${user.user.id}`, {
        headers: {
          'Authorization': `Bearer ${user.jwt}`
        }
      })
      const data = await response.json();
      setLikesReceived(data);
    }
    loadLikesReceived();
  }

  useEffect(() => {
    if (user) {
      reloader();
    }
  }, [user])

  return (
    <LikesContext.Provider value={{ likesGiven, likesReceived, reloader }}>
      { children }
    </LikesContext.Provider>
  )
}