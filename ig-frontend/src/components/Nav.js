import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../context/UserContext';

export default function Nav() {
  const { user } = useContext(UserContext);
  
  return (
    <div className="Nav">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/create" exact>Create</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
    </div>
  )
}