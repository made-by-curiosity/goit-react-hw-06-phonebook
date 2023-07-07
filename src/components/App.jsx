import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';
import { AddForm } from 'components/Form/Form';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import storage from 'utils/localStorageAPI';
import { addContact, deleteContact } from 'redux/contacts/slice.js';
import { updateFilter } from 'redux/filter/slice';

const STORAGE_KEY = 'phonebook_contacts';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  const handleSubmit = values => {
    const hasContact = contacts.find(contact => values.name === contact.name);

    if (hasContact) {
      alert(`${values.name} is already in contacts`);

      return;
    }

    const newContact = {
      id: nanoid(),
      ...values,
    };

    dispatch(addContact(newContact));
  };

  const handleFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

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
    <Container titleText="Phonebook">
      <Section>
        <AddForm onSubmit={handleSubmit} />
      </Section>
      <Section sectionTitle="Contacts">
        <Filter
          filterTitle="Find contacts by name"
          filterValue={filter}
          onFilter={handleFilter}
        />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </Section>
    </Container>
  );
};
