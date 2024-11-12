import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'

import {
  CartContainer,
  Overlay,
  Sidebar,
  Quantidade,
  Prices,
  CartItem
} from './styles'

import Tag from '../Tag'

import { close, removeToCart } from '../../Store/Reducers/cart'
import { formataPreco, getTotalPrice } from '../../Utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formataPreco(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Quantidade>{items.length} jogo(s) no carrinho</Quantidade>
            <Prices>
              Total de {formataPreco(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              title="Clique para continuar com a comprar"
              type="button"
            >
              Continuar com a comprar
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra!
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
