import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ListItem.module.css';
import { CiSquareRemove } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { setSelectedUser } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import {
  deleteContactThunk,
  patchContactThunk,
} from 'redux/contactsService/thunks';

const ListItem = ({
  id,
  name,
  number,
  url,
  isFavorite: isFavoriteIni,
  toggleModal,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteIni);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite === 'isFavorite') {
      dispatch(
        patchContactThunk({
          id,
          name,
          number: `${number}|-|${url}|-|notFavorite`,
        })
      );
      setIsFavorite('notFavorite');
      return;
    }
    dispatch(
      patchContactThunk({
        id,
        name,
        number: `${number}|-|${url}|-|isFavorite`,
      })
    );
    setIsFavorite('isFavorite');
  };

  const listItemClickHandler = e => {
    const clickTag = e.target.tagName;
    if (clickTag === 'LI' || clickTag === 'P') {
      toggleModal();
      dispatch(
        setSelectedUser({ id, name, number, url, isFavorite, action: 'Edit' })
      );
    }
  };

  const deleteHandler = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={css.listItem} onClick={listItemClickHandler}>
      <div className={css.imageThumb} onClick={toggleFavorite}>
        {url && (
          <img className={css.photoDemo} src={url} alt="User portrait"></img>
        )}
        {isFavorite === 'isFavorite' ? (
          <MdFavorite className={css.favoriteIcon} />
        ) : (
          <MdFavoriteBorder className={css.favoriteBorderIcon} />
        )}
      </div>

      <div className={css.dataBox}>
        <p className={css.pName}>{name}</p>
        <p className={css.pNumber}>{number}</p>
      </div>

      <button className={css.button} type="button">
        <FaPhone className={css.callIcon} />
      </button>

      <button onClick={deleteHandler} className={css.button} type="button">
        <CiSquareRemove className={css.removeIcon} />
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  url: PropTypes.string,
  isFavorite: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
