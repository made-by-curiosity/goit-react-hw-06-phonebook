import { ContactList } from 'components/ContactList/ContactList';
import { Form } from 'components/Form/Form';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container titleText="Phonebook">
      <Section>
        <Form />
      </Section>
      <Section sectionTitle="Contacts">
        <Filter filterTitle="Find contacts by name" />
        <ContactList />
      </Section>
    </Container>
  );
};
