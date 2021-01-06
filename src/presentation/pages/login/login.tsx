import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Input, FormStatus, Footer } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
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

const Login: React.FC<Props> = ({ validation }: Props) => {
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

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled type="submit" className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default Login
