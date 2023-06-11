import css from './Login.module.css';
import AuthForm from 'components/AuthForm/AuthForm';

const Login = () => {
  return (
    <div className={css.login}>
      <h2 className={css.title}>Login please</h2>
      <AuthForm />
    </div>
  );
};

export default Login;
