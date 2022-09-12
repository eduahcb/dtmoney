import React, { ReactElement } from 'react'

import Logo from 'assets/logo.svg'

export const Brand = (): ReactElement => {
  return (
    <img src={Logo} alt="dt money logo" />
  )
}
