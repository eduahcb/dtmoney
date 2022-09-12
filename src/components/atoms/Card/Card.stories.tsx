import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Card } from 'components/atoms/Card'
import { Button } from 'components/atoms/Button'

export default {
  title: 'Components/Card',
  component: Card
}

const AlignCenter = styled.div`
  text-align: center;
`

export const usage = (): ReactElement => (
  <Card>
    <AlignCenter>
      <p>this is a text</p>
      <Button color='primary'>my button</Button>
    </AlignCenter>
  </Card>
)
