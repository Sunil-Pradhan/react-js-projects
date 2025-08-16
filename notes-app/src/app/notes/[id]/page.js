'use client';
import { useState, useEffect, use  } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, CircularProgress, Box, Typography } from '@mui/material';
import { getNote, updateNote, deleteNote } from '@/lib/api';
import NoteForm from '@/components/NoteForm';

export default function NoteDetailPage({ params }) {
  // Unwrap the params promise
  const { id } = use(params);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchNote();
    }, [id]); // Use the unwrapped id

  const fetchNote = async () => {
    try {
      setLoading(true);
      const data = await getNote(id); // Use the unwrapped id
      setNote(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateNote = async (updatedData) => {
    try {
      await updateNote(id, updatedData); // Use the unwrapped id
      router.push('/notes');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteNote = async () => {
    try {
      await deleteNote(id); // Use the unwrapped id
      router.push('/notes');
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

  if (!note) {
    return (
      <Typography variant="body1" textAlign="center" mt={4}>
        Note not found
      </Typography>
    );
  }

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Edit Note</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteNote}
        >
          Delete Note
        </Button>
      </Box>

      <NoteForm
        initialData={note}
        onSubmit={handleUpdateNote}
        isEditing={true}
      />

      <Box mt={2}>
        <Link href="/notes" passHref>
          <Button variant="outlined">Back to Notes</Button>
        </Link>
      </Box>
    </div>
  );
}
