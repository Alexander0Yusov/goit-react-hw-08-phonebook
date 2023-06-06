import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import ListItem from 'components/ListItem/ListItem';
import {
  getContactsDBThunk,
  deleteContactDBThunk,
} from 'redux/contactsDB/thunks';

const contactsSelector = state => state.contactsDBCombine;
const filterSelector = state => state.filterCombine;

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, error, isLoading } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);

  useEffect(() => {
    dispatch(getContactsDBThunk());
  }, [dispatch]);

  const filterByName = () => {
    const lowName = filter?.toLowerCase();
    return contacts.filter(item => item.name?.toLowerCase().includes(lowName));
  };

  const deleteHandler = id => {
    dispatch(deleteContactDBThunk(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {filterByName().map(({ id, name, number, url }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            url={url}
            deleteContact={deleteHandler}
          />
        ))}
      </ul>
      {error && <h4>{error}</h4>}
      {isLoading && <h6>{'Loading...'}</h6>}
    </div>
  );
};

export default Contacts;
