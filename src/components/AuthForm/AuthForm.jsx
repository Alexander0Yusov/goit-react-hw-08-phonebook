import { useState } from 'react';
import css from './AuthForm.module.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={() => {}} className={css.authForm} autoComplete="off">
      <label className={css.formLabel}>
        <input
          type="text"
          name="email"
          title="title text"
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
          title="title text"
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
        {'Login'}
      </button>
    </form>
  );
};

export default AuthForm;
