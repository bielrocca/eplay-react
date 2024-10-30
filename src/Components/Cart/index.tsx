import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

import Button from '../Button'

import hollowNight from '../../Assets/Images/banner-hollow.jpg'

import {
  CartContainer,
  Overlay,
  Sidebar,
  Quantidade,
  Prices,
  CartItem
} from './styles'

import Tag from '../Tag'

import { close } from '../../Store/Reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={hollowNight} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>Windows</Tag>
              <span>R$ 79,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={hollowNight} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>Windows</Tag>
              <span>R$ 79,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantidade>2 jogo(s) no carrinho</Quantidade>
        <Prices>
          Total de R$ 158,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique para continuar com a comprar" type="button">
          Continuar com a comprar
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
