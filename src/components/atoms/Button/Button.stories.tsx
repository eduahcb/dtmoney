import React, { ReactElement } from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from 'components/atoms/Button'

export default {
  title: 'Components/Button',
  component: Button
}

type UsageProps = {
  title: string
}

export const usage = ({ title }: UsageProps): ReactElement => (
  <Button color='primary' onClick={action('clicked')} >{ title }</Button>
)

usage.args = {
  title: 'my button'
}

export const primary = ({ title }: UsageProps): ReactElement => (
  <Button color='primary' onClick={action('clicked')}>{ title }</Button>
)

primary.args = {
  title: 'my button'
}

export const secondary = ({ title }: UsageProps): ReactElement => (
  <Button color='secondary' onClick={action('clicked')}>{ title }</Button>
)

secondary.args = {
  title: 'secondary'
}
