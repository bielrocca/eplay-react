import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
}

const Produto = ({
  title,
  categoria,
  sistema,
  descricao,
  infos,
  imagem
}: Props) => (
  <Card>
    <img src={imagem} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{categoria}</Tag>
    <Tag>{sistema}</Tag>
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default Produto
