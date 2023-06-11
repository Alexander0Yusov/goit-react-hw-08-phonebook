import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>
      <ul className={css.navbar}>
        <li>
          <Link to="/" className={css.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/register" className={css.link}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className={css.link}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
