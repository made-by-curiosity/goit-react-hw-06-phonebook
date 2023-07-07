import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>{name}: </span> <span>{number}</span>{' '}
            <DeleteBtn
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
