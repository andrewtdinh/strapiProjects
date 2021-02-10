import { useState, createContext, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export const LikesContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default function({ children }) {
  return (
    <LikesContext.Provider>
      { children }
    </LikesContext.Provider>
  )
}