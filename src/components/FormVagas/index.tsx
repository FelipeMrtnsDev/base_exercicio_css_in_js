import { FormEvent, useState } from 'react'

<<<<<<< HEAD
import FormVagasStyled, { BotaoPesquisar, Campo } from './styles'

type Props = {
    aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
    const [termo, setTermo] = useState<string>('')

    const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        aoPesquisar(termo.toLocaleLowerCase())
    }

    return (
        <FormVagasStyled onSubmit={aoEnviarForm}>
            <Campo
                placeholder="Front-end, fullstack, node, design"
                onChange={(e: any) => setTermo(e.target.value)}
                type="search"
            />
            <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
        </FormVagasStyled>
    )
}
export default FormVagas
=======
import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default FormVagas
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
