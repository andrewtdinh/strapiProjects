import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/create" exact>Create</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
    </div>
  )
}