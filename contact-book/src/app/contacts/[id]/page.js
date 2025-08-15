'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Notification from '@/components/Notification';
import {
  getContact as fetchContact,
  updateContact as editContact,
} from '@/utils/api';

export default function ContactDetailPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const loadContact = async () => {
      try {
        setLoading(true);
        const data = await fetchContact(id);
        setContact(data);
      } catch (error) {
        showNotification(error.message || 'Failed to load contact', 'error');
        router.push('/contacts');
      } finally {
        setLoading(false);
      }
    };
    loadContact();
  }, [id, router]);

  const showNotification = (message, severity = 'success') => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleUpdateContact = async (updatedContact) => {
    try {
      await editContact(id, updatedContact);
      showNotification('Contact updated successfully');
      router.push('/contacts');
    } catch (error) {
      showNotification(error.message || 'Failed to update contact', 'error');
    }
  };

  if (loading) return <div>Loading contact details...</div>;
  if (!contact) return <div>Contact not found</div>;

  return (
    <div>
      <ContactForm
        initialContact={contact}
        onSubmit={handleUpdateContact}
        isEdit={true}
      />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleCloseNotification}
      />
    </div>
  );
}
