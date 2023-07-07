import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';
import { AddForm } from 'components/Form/Form';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import storage from 'utils/localStorageAPI';

const STORAGE_KEY = 'phonebook_contacts';

export const App = () => {
  const [contacts, setContacts] = useState(storage.load(STORAGE_KEY) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  const handleSubmit = values => {
    const hasContact = contacts.find(contact => values.name === contact.name);

    if (hasContact) {
      alert(`${values.name} is already in contacts`);

      return;
    }

    setContacts(contacts => {
      const newContact = {
        id: nanoid(),
        ...values,
      };

      return [newContact, ...contacts];
    });
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
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
