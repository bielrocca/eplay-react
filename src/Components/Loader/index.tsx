import { CircleLoader } from 'react-spinners'

import { cores } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <CircleLoader color={cores.branco} />
  </Container>
)

export default Loader
