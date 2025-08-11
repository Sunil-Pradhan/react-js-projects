'use client'

import { Spin } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function Loading() {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  )
}
