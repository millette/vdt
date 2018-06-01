'use strict'

export default {
  state: [
    {
      title: 'gift1'
    },
    {
      title: 'gift2'
    }
  ],
  reducers: {
    add: (state, gift) => {
      if (!gift.title) { throw new Error('Needed: title') }
      Object.keys(gift).forEach((k) => {
        if (!gift[k]) { delete gift[k] }
      })
      return [...state, gift]
    }
  },
  effects: {
    addAsync (payload, rootState) {
      return new Promise(resolve => setTimeout(resolve, 300))
        .then(() => this.add(payload))
    }
  }
}
