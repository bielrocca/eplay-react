import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Produto = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit est
      excepturi nisi? Facere cum maiores, fugiat beatae aliquid placeat et
      natus, quaerat, nisi molestias repudiandae. Explicabo, neque. Repellat,
      deserunt!
    </Descricao>
  </Card>
)

export default Produto
