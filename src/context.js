import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

//mock url
const url = 'https://mocki.io/v1/b0213980-6061-4b77-ad52-1e4f97dc822c'

const AppContext = React.createContext()

const initialState = {
  loading: 'false',
  navbar: [],
  project: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const apiProjects = await response.json()
    dispatch({ type: 'REFRESH', payload: apiProjects })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
