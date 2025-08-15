'use client';
import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import ContactList from '@/components/ContactList';
import Notification from '@/components/Notification';
import {
  getContacts as fetchContacts,
  createContact as addContact,
  deleteContact as removeContact,
} from '@/utils/api';

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (error) {
        showNotification('Failed to load contacts', 'error');
      }
    };
    loadContacts();
  }, []);

  const showNotification = (message, severity = 'success') => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleAddContact = async (contact) => {
    try {
      const newContact = await addContact(contact);
      setContacts([...contacts, newContact]);
      showNotification('Contact added successfully');
    } catch (error) {
      showNotification('Failed to add contact', 'error');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await removeContact(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
      showNotification('Contact deleted successfully');
    } catch (error) {
      showNotification('Failed to delete contact', 'error');
    }
  };

  return (
    <div>
      <ContactForm onSubmit={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleCloseNotification}
      />
    </div>
  );
}
