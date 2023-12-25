import { useAuthContext } from './useAuthContext'
import {useIncomesContext } from './useIncomesContext'
export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchTransactions } = useIncomesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchTransactions({type: 'SET_INCOMES', payload: null})
  }

  return { logout }
}