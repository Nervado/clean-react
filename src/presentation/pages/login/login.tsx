import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Input, FormStatus, Footer } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

type ErrorState = {
  email: string
  password: string
  main: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  const [errorState] = useState<ErrorState>({
    email: 'Campo Obrigatório',
    password: 'Campo Obrigatório',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" id="" placeholder="Digite seu email" />
          <Input type="password" name="password" id="" placeholder="Digite sua senha" />
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
