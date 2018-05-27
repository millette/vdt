'use strict'

export default {
  state: [], // initial state
  reducers: {
    // handle state changes with pure functions
    add: (state, gift) => [...state, gift]
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async addAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 3000))
      this.add(payload)
    }
  }
}
