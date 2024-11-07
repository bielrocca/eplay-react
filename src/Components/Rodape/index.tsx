import {
  ContainerRodape,
  SecaoRodape,
  Links,
  Link,
  TituloSecao
} from './styles'

const AnoAtual = new Date().getFullYear()

const Rodape = () => (
  <ContainerRodape>
    <div className="container">
      <SecaoRodape>
        <TituloSecao>Categorias</TituloSecao>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categorias#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categorias#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categorias#esporte"
            >
              Esporte
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categorias#luta"
            >
              Luta
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categorias#simulacao"
            >
              Simulação
            </Link>
          </li>
        </Links>
      </SecaoRodape>
      <SecaoRodape>
        <TituloSecao>Acesso rápido</TituloSecao>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a seção em breve"
              to="/#em-breve"
            >
              Em Breve
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a seção de promoção"
              to="/#promocao"
            >
              Promoções
            </Link>
          </li>
        </Links>
      </SecaoRodape>
      <p>{AnoAtual} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </ContainerRodape>
)

export default Rodape
