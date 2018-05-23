'use strict'

export default {
  state: [],
  reducers: {
    addVolunteer: (state, volunteer) => [...state, volunteer]
  },
  effects: {
    async addVolunteerAsync (volunteer, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.addVolunteer(volunteer)
    }
  }
}
