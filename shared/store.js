'use strict'

import { init } from '@rematch/core'
import * as models from './models'

// rematch store with initialValue set to 5
export const initStore = (initialState = { gift: 5, org: 17 }) => init({
  models,
  redux: { initialState }
})
