import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData)=>navData.isActive ? classes.active : ''} to='/registeration'>
             Registration
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData)=>navData.isActive ? classes.active : ''} to='/login'>
             Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;