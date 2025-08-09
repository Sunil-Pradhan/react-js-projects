//Import components
import QuoteCard from '@/components/QuoteCard';
import TagsSection from '@/components/TagsSection';

//Import ant design components
import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';

export default function Home() {
  return (
    <>
      <main style={{ padding: '24px' }}>
        {/* Title */}
        <Title level={1} style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Random Quote Generator
        </Title>

        {/* Quote Card */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <QuoteCard />
        </div>

        <Divider>Explore by Tags</Divider>
        {/* Render the client component */}
        <TagsSection />
      </main>
    </>
  );
}
