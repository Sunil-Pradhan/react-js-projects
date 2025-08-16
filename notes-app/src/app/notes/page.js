'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, CircularProgress, Box, Typography } from '@mui/material';
import { getNotes, deleteNote, createNote  } from '@/lib/api';
import NoteCard from '@/components/NoteCard';
import NoteForm from '@/components/NoteForm';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (noteData) => {
    try {
      await createNote(noteData);
      await fetchNotes();
      setShowForm(false);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">My Notes</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Create New Note'}
        </Button>
      </Box>

      {showForm && (
        <NoteForm
          onSubmit={handleCreateNote}
          isEditing={false}
        />
      )}

      {notes.length === 0 && !showForm ? (
        <Typography variant="body1" textAlign="center" mt={4}>
          No notes yet. Create your first note!
        </Typography>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={handleDeleteNote}
          />
        ))
      )}
    </div>
  );
}
