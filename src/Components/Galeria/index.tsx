import Secao from '../Secao'

import { Items, Item } from './styles'

import zelda from '../../Assets/Images/zelda.png'

const Galeria = () => (
  <Secao title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
    </Items>
  </Secao>
)

export default Galeria
