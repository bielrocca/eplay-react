import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;

  img {
    margin-left: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branco};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
