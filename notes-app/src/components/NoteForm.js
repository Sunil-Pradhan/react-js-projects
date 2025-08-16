import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  TextField,
  Button,
  Box,
  Typography,
  TextareaAutosize
} from '@mui/material';

const FormContainer = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px !important;
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3f51b5;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 12px !important;
`;

export default function NoteForm({ initialData = {}, onSubmit, isEditing }) {
  const [noteData, setNoteData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (isEditing && initialData) {
      setNoteData({
        title: initialData.title || '',
        description: initialData.description || '',
      });
    }
  }, [initialData, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(noteData);
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        {isEditing ? 'Edit Note' : 'Create New Note'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          fullWidth
          label="Title"
          name="title"
          value={noteData.title}
          onChange={handleChange}
          required
          variant="outlined"
        />
        <Typography variant="subtitle1" gutterBottom>
          Description
        </Typography>
        <StyledTextarea
          name="description"
          value={noteData.description}
          onChange={handleChange}
          required
        />
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
        >
          {isEditing ? 'Update Note' : 'Create Note'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
}
