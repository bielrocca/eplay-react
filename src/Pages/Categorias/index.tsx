import ListaDProdutos from '../../Components/ListaDProdutos'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../Services/API'

const Categorias = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ListaDProdutos
        title="RPG"
        background="black"
        games={rpgGames}
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ListaDProdutos
        title="Ação"
        background="grey"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ListaDProdutos
        title="Esportes"
        background="black"
        games={sportsGames}
        id="esporte"
        isLoading={isLoadingSports}
      />
      <ListaDProdutos
        title="Luta"
        background="grey"
        games={fightGames}
        id="luta"
        isLoading={isLoadingFight}
      />
      <ListaDProdutos
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulacao"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categorias
