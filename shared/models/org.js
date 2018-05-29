'use strict'

export default {
  state: [],
  reducers: {
    // handle state changes with pure functions
    // add: (state, payload) => [...state, payload]
    add: (state, org) => {
      if (!org.title) { throw new Error('Needed: title') }
      Object.keys(org).forEach((k) => {
        if (!org[k]) { delete org[k] }
      })
      return [...state, org]
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async addAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 200))
      this.add(payload)
    }
  }
}
