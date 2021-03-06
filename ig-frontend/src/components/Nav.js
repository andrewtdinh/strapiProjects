import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../context/UserContext';

export default function Nav() {
  const { user } = useContext(UserContext);

  return (
    <div className="Nav">
      <NavLink to="/" exact>Home</NavLink>
      {user &&
        <NavLink to="/create" exact>Create</NavLink>
      }
      {!user &&
        <>
          <NavLink to="/login" exact>Login</NavLink>
          <NavLink to="/signup" exact>Signup</NavLink>
        </>
      }
    </div>
  )
}