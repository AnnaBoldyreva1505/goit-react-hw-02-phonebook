import PropTypes from 'prop-types';
import ContactListElement from './ContactListElement/ContactListElement';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListElement
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
            contactId={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};