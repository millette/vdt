'use strict'

export default {
  state: [
    {
      title: 'volunteer1',
      hours: 20
    },
    {
      title: 'volunteer2',
      hours: 5
    },
    {
      title: 'Robin',
      hours: 50
    }
  ],
  reducers: {
    add: (state, volunteer) => {
      if (!volunteer.title) { throw new Error('Needed: title') }
      Object.keys(volunteer).forEach((k) => {
        if (!volunteer[k]) { delete volunteer[k] }
      })
      return [...state, volunteer]
    },
    addVolHours: (state, { volunteer, hours }) => {
      if (!hours) {
        const err = new Error('Hours not found')
        err.field = 'hours'
        throw err
      }
      const ret = state.slice()
      const idx = ret.findIndex((x) => x.title.toLowerCase() === volunteer.toLowerCase())
      if (idx === -1) {
        const err = new Error('Name not found')
        err.field = 'volunteer'
        throw err

      }
      ret[idx].hours += hours
      return ret
    }
  },
  effects: {
    async addVolunteerAsync (volunteer, rootState) {
      await new Promise(resolve => setTimeout(resolve, 100))
      return this.add(volunteer)
    }
  }
}
