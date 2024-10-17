import styled from 'styled-components'

import { cores } from '../../styles'

export const ContainerRodape = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const TituloSecao = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: #a3a3a3;
  text-decoration: none;
  margin-right: 8px;
`

export const SecaoRodape = styled.div`
  margin-bottom: 64px;
`
