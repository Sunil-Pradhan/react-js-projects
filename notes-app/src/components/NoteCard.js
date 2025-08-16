import styled from 'styled-components';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Link from 'next/link';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const NoteTitle = styled(Typography)`
  font-weight: 600 !important;
  margin-bottom: 10px !important;
  color: #3f51b5;
`;

const NoteDescription = styled(Typography)`
  white-space: pre-line;
  margin-bottom: 15px !important;
`;

const NoteDate = styled(Typography)`
  font-size: 0.8rem !important;
  color: #666;
`;

const ActionButtons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export default function NoteCard({ note, onDelete }) {
  const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <StyledCard>
      <CardContent>
        <NoteTitle variant="h6">{note.title}</NoteTitle>
        <NoteDescription variant="body1">{note.description}</NoteDescription>
        <NoteDate variant="body2">Created: {formattedDate}</NoteDate>
        <ActionButtons>
          <Link href={`/notes/${note.id}`} passHref>
            <IconButton aria-label="edit" color="primary">
              <Edit />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => onDelete(note.id)}
          >
            <Delete />
          </IconButton>
        </ActionButtons>
      </CardContent>
    </StyledCard>
  );
}
