//Import styles
import { StyledCard, UserInfo, DetailRow, DetailLabel, DetailValue } from '@/styles/UserCardStyle';
import { Card, Avatar, Tag, Divider, Button, Space } from 'antd';

export const UserCard = ({ user, isLoading, refetch }) => {
  if (isLoading || !user) {
    return <Card loading style={{ width: '100%', maxWidth: 600, margin: '20px auto' }} />;
  }

  const { name, picture, gender, email, phone, location, dob, nat } = user;

  return (
    <StyledCard
      cover={
        <div
          style={{
            background: '#C9E9D2',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar src={picture.large} size={128} />
        </div>
      }
      actions={[
        <Button
          type="primary"
          onClick={refetch}
          key="generate"
          style={{ marginBottom: 10, marginTop: 10 }}
        >
          Generate New User
        </Button>,
      ]}
    >
      <UserInfo>
        <h2 style={{ marginBottom: 5 }}>{`${name.title} ${name.first} ${name.last}`}</h2>
        <Space.Compact>
          <Tag color={gender === 'male' ? 'blue' : 'pink'}>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </Tag>
          <Tag color="geekblue">{nat}</Tag>
        </Space.Compact>
      </UserInfo>

      <Divider />

      <div>
        <DetailRow>
          <DetailLabel span={8}>Email:</DetailLabel>
          <DetailValue span={16}>
            <a href={`mailto:${email}`}>{email}</a>
          </DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel span={8}>Phone:</DetailLabel>
          <DetailValue span={16}>{phone}</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel span={8}>Age:</DetailLabel>
          <DetailValue span={16}>{dob.age}</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel span={8}>Address:</DetailLabel>
          <DetailValue span={16}>
            {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}, ${location.postcode}`}
          </DetailValue>
        </DetailRow>
      </div>
    </StyledCard>
  );
};
