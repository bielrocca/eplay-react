import { Link } from 'react-router-dom'

import carrinho from '../../Assets/Images/carrinho.svg'
import logo from '../../Assets/Images/logo.svg'

import { HeaderBar, CartButton, LinkItem, Links } from './styles'

import { open } from '../../Store/Reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categorias">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categorias">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
