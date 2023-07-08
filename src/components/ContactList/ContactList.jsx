import React from 'react';
import { ContactItem, DeleteBtn } from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>{name}: </span> <span>{number}</span>{' '}
            <DeleteBtn
              onClick={() => {
                handleDelete(id);
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
