'use strict'

export default {
  state: [],
  reducers: {
    // handle state changes with pure functions
    add: (state, payload) => [...state, payload]
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async addAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.add(payload)
    }
  }
}
