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
            <Link to="/categorias#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categorias#action">Ação</Link>
          </li>
          <li>
            <Link to="/categorias#esporte">Esporte</Link>
          </li>
          <li>
            <Link to="/categorias#luta">Luta</Link>
          </li>
          <li>
            <Link to="/categorias#simulacao">Simulação</Link>
          </li>
        </Links>
      </SecaoRodape>
      <SecaoRodape>
        <TituloSecao>Acesso rápido</TituloSecao>
        <Links>
          <li>
            <Link to="/#em-breve">Em Breve</Link>
          </li>
          <li>
            <Link to="/#promocao">Promoções</Link>
          </li>
        </Links>
      </SecaoRodape>
      <p>{AnoAtual} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </ContainerRodape>
)

export default Rodape
