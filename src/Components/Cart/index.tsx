import Button from '../Button'

import { CartContainer, Overlay, Sidebar, Quantidade, Prices } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <li>
          <h3>Nome do jogo</h3>
        </li>
      </ul>
      <Quantidade>2 jogo(s) no carrinho</Quantidade>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique para continuar com a comprar" type="button">
        Continuar com a comprar
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
