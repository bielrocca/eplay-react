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
            <Link>RPG</Link>
          </li>
          <li>
            <Link>AÇÃO</Link>
          </li>
          <li>
            <Link>AVENTURA</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </SecaoRodape>
      <SecaoRodape>
        <TituloSecao>Acesso rápido</TituloSecao>
        <Links>
          <li>
            <Link>Categorias</Link>
          </li>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
        </Links>
      </SecaoRodape>
      <p>{AnoAtual} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </ContainerRodape>
)

export default Rodape
