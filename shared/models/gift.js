'use strict'

export default {
  state: [], // initial state
  reducers: {
    // handle state changes with pure functions
    add: (state, gift) => {
      if (!gift.title) { throw new Error('Needed: title') }
      Object.keys(gift).forEach((k) => {
        if (!gift[k]) { delete gift[k] }
      })
      return [...state, gift]
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    addAsync (payload, rootState) {
      return new Promise(resolve => setTimeout(resolve, 300))
        .then(() => this.add(payload))
    }
  }
}
