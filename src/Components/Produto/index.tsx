import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
  id: number
}

const Produto = ({
  title,
  categoria,
  sistema,
  descricao,
  infos,
  imagem,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }

    return descricao
  }

  return (
    <Card to={`/produto/${id}`}>
      <img src={imagem} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{categoria}</Tag>
      <Tag>{sistema}</Tag>
      <Descricao>{getDescricao(descricao)}</Descricao>
    </Card>
  )
}

export default Produto
