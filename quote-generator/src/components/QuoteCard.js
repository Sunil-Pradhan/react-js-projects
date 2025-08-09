'use client';

//Import styles
import {
  QuoteContainer,
  StyledCard,
  ActionsContainer,
  ErrorWrapper,
} from '@/styles/QuoteCardStyles';

//Import Libraries
import { useRouter } from 'next/navigation';

//Import ant design components
import { Space, Typography, Button, Tag, Divider, message, Alert } from 'antd';

//Import ant design icons
import { CopyOutlined, ShareAltOutlined, SyncOutlined } from '@ant-design/icons';

//Import custom hooks
import { useRandomQuote } from '@/hooks/useQuotes';

const { Title, Text } = Typography;

export default function QuoteCard() {
  // Fetch random quote using our custom hook
  const { data: quote, isLoading, isError, refetch } = useRandomQuote();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  // Copy quote to clipboard
  const handleCopy = () => {
    if (!quote) return;
    navigator.clipboard.writeText(`${quote.quote} — ${quote.author}`);
    messageApi.success('Quote copied to clipboard!');
  };

  // Share quote using Web Share API
  const handleShare = () => {
    if (!quote) return;
    if (navigator.share) {
      navigator.share({
        title: 'Check out this quote',
        text: `${quote.quote} — ${quote.author}`,
        url: window.location.href,
      });
    } else {
      messageApi.info('Web Share API not supported in your browser');
    }
  };

  // Navigate to author page
  const handleAuthorClick = (author) => {
    router.push(`/author/${encodeURIComponent(author)}`);
  };

  // Navigate to tag page
  const handleTagClick = (tag) => {
    router.push(`/tag/${encodeURIComponent(tag)}`);
  };

  if (isError)
    return (
      <>
        <ErrorWrapper>
          <Alert message="Error fetching quote" type="error" showIcon />
        </ErrorWrapper>
      </>
    );

  return (
    <>
      {contextHolder}
      <StyledCard loading={isLoading}>
        {quote && (
          <QuoteContainer>
            <Title level={3} style={{ fontStyle: 'italic', fontWeight: 'normal' }}>
              &quot;{quote.quote}&quot;
            </Title>
            <Divider />
            <Space size={[8, 16]} wrap style={{ marginTop: 16 }}>
              <Text
                strong
                onClick={() => handleAuthorClick(quote.author)}
                style={{ cursor: 'pointer' }}
              >
                — {quote.author}
              </Text>

              {quote.tags.map((tag) => (
                <Tag
                  key={tag}
                  color="blue"
                  onClick={() => handleTagClick(tag)}
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
            <ActionsContainer>
              <Button
                type="primary"
                icon={<SyncOutlined />}
                onClick={() => refetch()}
                loading={isLoading}
              >
                New Quote
              </Button>
              <Button icon={<CopyOutlined />} onClick={handleCopy}>
                Copy
              </Button>
              <Button icon={<ShareAltOutlined />} onClick={handleShare}>
                Share
              </Button>
            </ActionsContainer>
          </QuoteContainer>
        )}
      </StyledCard>
    </>
  );
}
