import styled from 'styled-components'
import Modal from 'react-modal'

export const style: Modal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    maxWidth: '576px',
    background: 'var(--background)',
    padding: '3rem',
    position: 'relative',
    borderRadius: '5px'
  }
}

export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 0;
  margin-bottom: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
`

export const StyledModalHeader = styled.div`
  
  h2 {
    color: var(--title);
    font-size: 1.5rem;
  }
  
  
`

export const StyledModalContent = styled.div`
  margin-top: 2rem;
`
