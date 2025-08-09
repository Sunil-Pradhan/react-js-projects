//Import Libraries
import { notFound } from 'next/navigation';

//Import components
import TagQuotesList from '@/components/TagQuotesList';

//Import ant design components
import Title from 'antd/es/typography/Title';

export default async function TagPage({ params }) {
  if (!params?.tag) {
    return notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <Title level={2}>Quotes tagged with &quot;{decodeURIComponent(params.tag)}&quot;</Title>
      <TagQuotesList tag={params.tag} />
    </div>
  );
}
