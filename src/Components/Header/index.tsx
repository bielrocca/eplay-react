import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import carrinho from '../../Assets/Images/carrinho.svg'
import logo from '../../Assets/Images/logo.svg'

import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import { open } from '../../Store/Reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categorias"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a página de novidades"
                  to="/#em-breve"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a página de promoções"
                  to="/#promocao"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a página de novidades"
              to="/#em-breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a página de promoções"
              to="/#promocao"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
