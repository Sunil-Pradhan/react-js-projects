'use client';

import { useTags } from '@/hooks/useQuotes';
import { LoadingWrapper } from '@/styles/QuoteCardStyles';
import { ErrorWrapper } from '@/styles/TagsSectionStyles';
import { Alert, Space, Tag, Skeleton } from 'antd';
import Link from 'next/link';

const TagsSection = () => {
  const { data: tags, isLoading, isError } = useTags();

  if (isLoading)
    return (
      <>
        <LoadingWrapper>
          <Space size={[8, 16]} wrap style={{ justifyContent: 'center' }}>
            {[...Array(8)].map((_, i) => (
              <Skeleton.Button
                key={i}
                active
                size="small"
                shape="round"
                style={{ width: 80, height: 24 }}
              />
            ))}
          </Space>
        </LoadingWrapper>
      </>
    );
  if (isError)
    return (
      <>
        <ErrorWrapper>
          <Alert message="Error fetching quote" type="error" showIcon />
        </ErrorWrapper>
      </>
    );

  return (
    <Space size={[8, 16]} wrap style={{ justifyContent: 'center' }}>
      {tags?.map((tag) => (
        <Link key={tag} href={`/tag/${tag}`}>
          <Tag color="blue" style={{ cursor: 'pointer' }}>
            {tag}
          </Tag>
        </Link>
      ))}
    </Space>
  );
};

export default TagsSection;
