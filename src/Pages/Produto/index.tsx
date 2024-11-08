import { useParams } from 'react-router-dom'

import Hero from '../../Components/Hero'
import Secao from '../../Components/Secao'
import Galeria from '../../Components/Galeria'

import { useGetGameQuery } from '../../Services/API'
import Loader from '../../Components/Loader'

type GameParams = {
  id: string
}

const Produto = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Secao title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Secao>
      <Secao title="Mais detalhes" background="grey">
        <p>
          Plataforma: {game.details.system} <br />
          Desenvolvedor: {game.details.developer} <br />
          Editora: {game.details.publisher} <br />
          Idiomas: O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')} <br />
        </p>
      </Secao>
      <Galeria
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Produto
