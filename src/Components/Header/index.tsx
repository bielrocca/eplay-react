import { Link } from 'react-router-dom'

import carrinho from '../../Assets/Images/carrinho.svg'
import logo from '../../Assets/Images/logo.svg'

import { HeaderBar, LinkCart, LinkItem, Links } from './styles'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
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
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
