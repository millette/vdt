'use strict'

export default {
  state: [
    {
      title: 'org1'
    },
    {
      title: 'org2'
    }
  ],
  reducers: {
    add: (state, org) => {
      if (!org.title) { throw new Error('Needed: title') }
      Object.keys(org).forEach((k) => {
        if (!org[k]) { delete org[k] }
      })
      return [...state, org]
    }
  },
  effects: {
    async addAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 200))
      return this.add(payload)
    }
  }
}
