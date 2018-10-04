import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 
  50% { 
    transform: scale(1.0);
  }
`

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`
const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f53776;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 1s infinite ease-in-out;
`
const BounceDelayed = styled(Bounce)`
  animation-delay: 0.4s;
`

export default _ => (
  <Spinner>
    <Bounce />
    <BounceDelayed />
  </Spinner>
)
