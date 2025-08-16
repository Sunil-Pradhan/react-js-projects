import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ marginBottom: '30px' }}>Welcome to Notes App</h1>
      <Link href="/notes" passHref>
        <Button variant="contained" size="large">
          View All Notes
        </Button>
      </Link>
    </div>
  );
}
