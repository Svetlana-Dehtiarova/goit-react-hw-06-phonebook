import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={css.item}>
      <p className={css.contact}>
        {name}............
        {number}
      </p>
      <button
        className={css.btn}
        type="submit"
        onClick={() => contactsDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
