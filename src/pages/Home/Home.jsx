import css from './Home.module.scss';
import defaultImg from '../../images/phoneBook.jpg';

const Home = () => {
  return (
    <div className={css.home}>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.thumb}>
        <img src={defaultImg} alt="phone" />
      </div>
    </div>
  );
};

export default Home;
