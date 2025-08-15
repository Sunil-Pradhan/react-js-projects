import { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled(Paper)`
  padding: 2rem;
  margin-top: 2rem;
`;

const ContactForm = ({ initialContact, onSubmit, isEdit }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
    }
  }, [initialContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  return (
    <FormContainer elevation={3}>
      <Typography variant="h6" gutterBottom>
        {isEdit ? 'Edit Contact' : 'Add New Contact'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {isEdit ? 'Update' : 'Save'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormContainer>
  );
};

export default ContactForm;
