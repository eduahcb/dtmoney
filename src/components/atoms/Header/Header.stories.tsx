import React, { ReactElement } from 'react'
import { action } from '@storybook/addon-actions'

import { Brand } from 'components/atoms/Brand'
import { Header } from 'components/atoms/Header/Header'

export default {
  title: 'Components/Header',
  component: Header
}

type UsageProps = {
  title: string
}

export const usage = ({ title }: UsageProps): ReactElement => (
  <Header>
    <h1>{title}</h1>
  </Header>
)

usage.args = {
  title: 'Title'
}

export const withBrand = (): ReactElement => (
  <Header>
    <Brand />
  </Header>

)

export const withButton = (): ReactElement => (
  <Header>
    <Brand />
    <button onClick={action('clicked')}>click here</button>
  </Header>
)
