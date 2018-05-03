'use strict'

export default {
  state: {
    // auth: ['robin'],
    // login: false,
    name: ''
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    // setName: (state, name) => ({ ...state, name }),
    login666: (state, name) => ({ ...state, name }),
    logout666: (state) => ({ ...state, name: '' })
  }
}

/*
export default {
  state: {
    auth: ['robin'],
    login: false
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment (state, payload) {
      return state + payload
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment(payload)
    }
  }
}
*/
