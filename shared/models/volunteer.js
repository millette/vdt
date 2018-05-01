'use strict'

export default {
  state: {
    // name: '',
    // birthdate: ''
    volunteers: []
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    addVolunteer (state, volunteer) {
      return { ...state, volunteers: [...state.volunteers, volunteer] }
    }
    /*
    setName (state, name) {
      return { ...state, name }
    },
    setBirth (state, birthdate) {
      return { ...state, birthdate }
    }
    */
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    /*
    async setNameAsync (name, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.setName(name)
    }
    */
    async addVolunteerAsync (volunteer, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.addVolunteer(volunteer)
    }
  }
}
