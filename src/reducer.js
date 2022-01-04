const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'REFRESH') {
    return {
      ...state,
      loading: false,
      navbar: [...new Set(action.payload.map((item) => item.project))],
      project: action.payload,
    }
  }
  throw new Error('no matching action type')
}

export default reducer
