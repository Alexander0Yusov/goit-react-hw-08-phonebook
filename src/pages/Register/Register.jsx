import css from './Register.module.css';
import AuthForm from 'components/AuthForm/AuthForm';

const Register = () => {
  return (
    <div className={css.register}>
      <h2 className={css.title}>Register please</h2>
      <AuthForm />
    </div>
  );
};

export default Register;
