import React, { useEffect } from 'react';
import { ContactItem, DeleteBtn } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/slice';
import storage from 'utils/localStorageAPI';
import { useDispatch, useSelector } from 'react-redux';

const STORAGE_KEY = 'phonebook_contacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
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
