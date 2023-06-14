import { useEffect, useState } from 'react';
import css from './AuthForm.module.css';
// import { login } from 'redux/authService/operations';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk, signUpThunk } from 'redux/authService/thunks';

const AUTH_ACTION = {
  SIGNUP: 'SignUp',
  LOGIN: 'Login',
};

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('across8888@mail.com');
  const [password, setPassword] = useState('examplepwd12345');
  const [action, setAction] = useState('');

  const location = useLocation();
  const dispatch = useDispatch();

  const { SIGNUP, LOGIN } = AUTH_ACTION;

  useEffect(() => {
    location.pathname === '/register' ? setAction(SIGNUP) : setAction(LOGIN);
  }, [location.pathname, SIGNUP, LOGIN]);

  const handleSubmit = e => {
    e.preventDefault();

    if (action === SIGNUP) {
      const user = {
        name,
        email,
        password,
      };
      dispatch(signUpThunk(user));
    }

    if (action === LOGIN) {
      const user = {
        email,
        password,
      };
      dispatch(loginThunk(user));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.authForm} autoComplete="off">
      {action === SIGNUP && (
        <label className={css.formLabel}>
          <input
            type="text"
            name="name"
            title="Enter Your Name, please!"
            required
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            className={css.input}
            placeholder="Name"
          />
        </label>
      )}
      <label className={css.formLabel}>
        <input
          type="text"
          name="email"
          title="Enter email, please!"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          className={css.input}
          placeholder="email"
        />
      </label>
      <label className={css.formLabel}>
        <input
          type="tel"
          name="password"
          title="Enter password, please!"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          className={css.input}
          placeholder="password"
        />
      </label>

      <button className={css.button} type="submit">
        {action}
      </button>
    </form>
  );
};

export default AuthForm;