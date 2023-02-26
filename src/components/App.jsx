import { useSelector } from 'react-redux';

import css from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { selectContacts } from 'selectors';

export function App() {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      <h1 className={css.phonBookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleContacts}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Phonebook is empty. Please add your first contact:)</p>
      )}
    </div>
  );
}
