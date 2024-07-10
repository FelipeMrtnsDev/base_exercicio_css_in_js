<<<<<<< HEAD
import GlobalStyle, { Container } from './styles'
=======
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

<<<<<<< HEAD
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
=======
import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
    </>
  )
}

export default App
