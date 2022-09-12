import styled from 'styled-components'

import { ButtonProps } from './Button'

export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: ${({ color }: ButtonProps) => color === 'primary' ? 'var(--blue-light)' : 'var(--green)'};
  padding: 0 32px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
  }
`
