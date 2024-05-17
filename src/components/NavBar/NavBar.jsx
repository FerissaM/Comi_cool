import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-title">
          <Link to="/">ComiCool </Link>
        </div>
        <div className="navbar-links">
        <Link to="/orders">Order History</Link>
          <Link to="/cart">Cart</Link>
          <span>Welcome, {user.name}</span>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </nav>
  );
}