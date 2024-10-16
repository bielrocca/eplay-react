import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Card } from '../Produto/styles'

export const Container = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preto};
  }
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
