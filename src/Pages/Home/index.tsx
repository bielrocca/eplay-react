import Banner from '../../Components/Banner'
import ListaDProdutos from '../../Components/ListaDProdutos'
import { useGetEmBreveQuery, useGetPromocoesQuery } from '../../Services/API'

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
