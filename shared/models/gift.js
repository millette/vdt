'use strict'

export default {
  state: [
    {
      title: 'gift1',
      estimate: 10
    },
    {
      title: 'gift2',
      estimate: 3.5
    }
  ],
  reducers: {
    buy: (state, b) => {
      console.log('BUY-B:', b)
      return state
    },
    add: (state, gift) => {
      const err = new Error('Missing field')
      if (!gift.title) {
        err.field = 'title'
        throw err // new Error('Needed: title')
      }
      if (!gift.estimate) {
        err.field = 'estimate'
        throw err // new Error('Needed: estimate')
      }
      Object.keys(gift).forEach((k) => {
        if (!gift[k]) { delete gift[k] }
      })
      return [...state, gift]
    }
  },
  effects: {
    async buyAsync (payload, rootState) {
      if (!rootState.auth.name) { throw new Error('Not connected.') }
      return this.buy(payload)
    },
    addAsync (payload, rootState) {
      return new Promise(resolve => setTimeout(resolve, 300))
        .then(() => this.add(payload))
    }
  }
}
