'use strict'

export default {
  state: {
    name: ''
  },
  reducers: {
    login: (state, name) => ({ ...state, name }),
    logout: (state) => ({ ...state, name: '' })
  }
}
