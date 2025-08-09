//Import Libraries
import { notFound } from 'next/navigation';

//Import ant design components
import Title from 'antd/es/typography/Title';

//Import components
import AuthorQuotesList from '@/components/AuthorQuotesList';

export default async function AuthorPage({ params }) {
  // Validate the author parameter
  if (!params?.author || typeof params.author !== 'string') {
    return notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <Title level={2}>Quotes by {decodeURIComponent(params.author)}</Title>
      <AuthorQuotesList author={params.author} />
    </div>
  );
}
