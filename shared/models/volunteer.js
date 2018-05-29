'use strict'

export default {
  state: [],
  reducers: {
    // addVolunteer: (state, volunteer) => [...state, volunteer]
    add: (state, volunteer) => {
      if (!volunteer.title) { throw new Error('Needed: title') }
      Object.keys(volunteer).forEach((k) => {
        if (!volunteer[k]) { delete volunteer[k] }
      })
      return [...state, volunteer]
    }
  },
  effects: {
    async addVolunteerAsync (volunteer, rootState) {
      await new Promise(resolve => setTimeout(resolve, 100))
      this.add(volunteer)
    }
  }
}
