import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'

const Produto = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

export default Produto
