import { Select, Space, Typography } from 'antd'
import styled from 'styled-components'

const { Option } = Select
const { Text } = Typography

const FiltersContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 600px;
  margin: 0 auto 20px;
`

export const Filters = ({ filters, setFilters }) => {
  const handleGenderChange = (value) => {
    setFilters(prev => ({ ...prev, gender: value }))
  }

  const handleNationalityChange = (value) => {
    setFilters(prev => ({ ...prev, nat: value }))
  }

  return (
    <FiltersContainer>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Text strong>Gender:</Text>
          <Select
            style={{ width: '100%', marginTop: 8 }}
            placeholder="Select gender"
            allowClear
            onChange={handleGenderChange}
            value={filters.gender}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </div>

        <div>
          <Text strong>Nationality:</Text>
          <Select
            style={{ width: '100%', marginTop: 8 }}
            placeholder="Select nationality"
            allowClear
            mode="multiple"
            maxTagCount="responsive"
            onChange={handleNationalityChange}
            value={filters.nat}
          >
            <Option value="AU">Australia</Option>
            <Option value="BR">Brazil</Option>
            <Option value="CA">Canada</Option>
            <Option value="CH">Switzerland</Option>
            <Option value="DE">Germany</Option>
            <Option value="DK">Denmark</Option>
            <Option value="ES">Spain</Option>
            <Option value="FI">Finland</Option>
            <Option value="FR">France</Option>
            <Option value="GB">United Kingdom</Option>
            <Option value="IE">Ireland</Option>
            <Option value="IN">India</Option>
            <Option value="IR">Iran</Option>
            <Option value="NO">Norway</Option>
            <Option value="NL">Netherlands</Option>
            <Option value="NZ">New Zealand</Option>
            <Option value="TR">Turkey</Option>
            <Option value="US">United States</Option>
          </Select>
        </div>
      </Space>
    </FiltersContainer>
  )
}
