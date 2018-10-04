import React from 'react'
import styled from 'styled-components'

const Quotation = styled.span`
  position: absolute;
  top: 0;
  left: 2px;
  margin-bottom: -30px;
  font-size: 60px;
  color: #f53776;
`
export default () => <Quotation>&ldquo;</Quotation>
