import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'
// import Context from '@/presentation/contexts/form/form-context'

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
