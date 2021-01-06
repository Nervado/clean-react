import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Input, FormStatus, Footer } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}

type StateProps = {
  email: string
  password: string
  isLoading: boolean
  errorMessage: string
}

type ErrorState = {
  email: string
  password: string
  main: string
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState<StateProps>({
    email: '',
    password: '',
    isLoading: false,
    errorMessage: ''
  })

  const [errorState, setErrorState] = useState<ErrorState>({
    email: '',
    password: '',
    main: ''
  })

  useEffect(() => {
    setErrorState({
      ...errorState,
      email: validation.validate(
        'email', state.email
      ),
      password: validation.validate(
        'password', state.password
      )
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (state.isLoading || errorState.email || errorState.password) return

    const { email, password } = state

    setState({
      ...state,
      isLoading: true
    })

    await authentication.auth({
      email,
      password
    })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState, setState }}>
        <form data-testid='form' className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled={!!errorState.email || !!errorState.password} type="submit" className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default Login
