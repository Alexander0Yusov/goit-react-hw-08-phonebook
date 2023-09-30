import css from './FormSignUp.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { signUpThunk } from 'redux/authService/thunks';
import { setError } from 'redux/authService/authSlice';
import { authSelector } from 'redux/stateSelectors';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter Your name, please!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Enter Your email, please!')
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Enter valid email'),
  password: Yup.string()
    .min(7)
    .required('Enter Your password, please!')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
      'At least: one uppercase letter, one lowercase letter, one number, one special symbol'
    ),
});

const FormSignUp = () => {
  const { error } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    error && alert(error);
    dispatch(setError(null));
  }, [error, dispatch]);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      signUpThunk({
        name,
        email,
        password,
      })
    );
    resetForm();
    console.log('hi');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={css.authForm}
          autoComplete="off"
        >
          <label className={css.formLabel}>
            <Field
              name="name"
              title="Enter Your Name, please!"
              required
              className={css.input}
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            {errors.name && touched.name && (
              <p style={{ margin: 4 }} className={css.errorText}>
                {errors.name}
              </p>
            )}
          </label>

          <label className={css.formLabel}>
            <Field
              name="email"
              title="Enter email, please!"
              required
              className={css.input}
              placeholder="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {errors.email && touched.email && (
              <p style={{ margin: 4 }} className={css.errorText}>
                {errors.email}
              </p>
            )}
          </label>
          <label className={css.formLabel}>
            <Field
              name="password"
              title="Enter password, please!"
              required
              className={css.input}
              placeholder="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {errors.password && touched.password && (
              <p style={{ margin: 4 }} className={css.errorText}>
                {errors.password}
              </p>
            )}
          </label>

          {/* стили менять тернарником */}
          <button className={css.authButton} type="submit" disabled={!isValid}>
            {'SignUp'}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormSignUp;
