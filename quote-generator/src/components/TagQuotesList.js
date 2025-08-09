'use client';

//Import ant design components
import { List, Card, Space, Tag, Typography, Alert, Button } from 'antd';

//Import Libraries
import Link from 'next/link';

//Import custom hooks
import { useQuotesByTag } from '@/hooks/useQuotes';

const { Text } = Typography;

export default function TagQuotesList({ tag }) {
  const { data: response, isLoading, isError, refetch } = useQuotesByTag(tag);

  if (isLoading) return <Card loading />;
  if (isError) return <Alert message="Error loading quotes" type="error" showIcon />; // Let the parent handle the error

  // Extract quotes from response - now properly handling the API structure
  const quotes = Array.isArray(response) ? response : response?.data || [];

  if (quotes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Alert
          message="No quotes found for this author"
          type="info"
          showIcon
          style={{ marginBottom: '20px' }}
        />
        <Button type="primary" onClick={refetch}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={quotes}
      renderItem={(quote) => (
        <List.Item>
          <Card hoverable style={{ cursor: 'unset' }}>
            <Text italic>&quot;{quote.quote}&quot;</Text>
            <div style={{ marginTop: 16 }}>
              <Text strong>
                — <Link href={`/author/${encodeURIComponent(quote.author)}`}>{quote.author}</Link>
              </Text>
            </div>
            <Space size={[8, 16]} wrap style={{ marginTop: 16 }}>
              {quote.tags.map((tag) => (
                <Link key={tag} href={`/tag/${tag}`}>
                  <Tag color="blue" style={{ cursor: 'pointer' }}>
                    {tag}
                  </Tag>
                </Link>
              ))}
            </Space>
          </Card>
        </List.Item>
      )}
    />
  );
}
