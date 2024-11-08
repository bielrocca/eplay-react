import Banner from '../../Components/Banner'
import ListaDProdutos from '../../Components/ListaDProdutos'
import { useGetEmBreveQuery, useGetPromocoesQuery } from '../../Services/API'

export interface GaleriaItem {
  type: 'imagem' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GaleriaItem[]
  }
}

const Home = () => {
  const { data: EmBreve, isLoading: isLoadingEmBreve } = useGetEmBreveQuery()
  const { data: Promocoes, isLoading: isLoadingPromocoes } =
    useGetPromocoesQuery()

  return (
    <>
      <Banner />
      <ListaDProdutos
        title="Promoções"
        background="grey"
        games={Promocoes}
        id="promocao"
        isLoading={isLoadingPromocoes}
      />
      <ListaDProdutos
        title="Em Breve"
        background="black"
        games={EmBreve}
        id="em-breve"
        isLoading={isLoadingEmBreve}
      />
    </>
  )
}

export default Home
