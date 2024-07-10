<<<<<<< HEAD
import HeroStyled, { HeroContainer, Title } from './styles'

const Hero = () => (
    <HeroStyled>
        <HeroContainer>
            <Title>As melhores vagas para tecnologia, design e artes visuais.</Title>
        </HeroContainer>
    </HeroStyled>
)

export default Hero
=======
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
)

export default Hero
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
