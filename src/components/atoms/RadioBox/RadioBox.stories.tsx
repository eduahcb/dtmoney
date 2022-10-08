import React, { ReactElement } from 'react'

import { RadioBox } from 'components/atoms/RadioBox'

import IncomeImage from 'stories/assets/income.svg'

export default {
  title: 'Components/RadioBox',
  component: RadioBox
}

export const usage = (): ReactElement =>
  <RadioBox title="Entrada" img={IncomeImage} />
