import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import { Edit, Delete, Person } from '@mui/icons-material';
import styled from 'styled-components';
import Link from 'next/link';

const ListContainer = styled(Paper)`
  margin-top: 2rem;
  padding: 1rem;
`;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListContainer elevation={3}>
      <Typography variant="h6" gutterBottom>
        My Contacts
      </Typography>
      <List>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <ListItem
              secondaryAction={
                <>
                  <Link href={`/contacts/${contact.id}`} passHref>
                    <IconButton edge="end" aria-label="edit">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDelete(contact.id)}
                  >
                    <Delete />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={`${contact.phone} • ${contact.email}`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </ListContainer>
  );
};

export default ContactList;
