'use strict'

import { init } from '@rematch/core'
import * as models from './models'

// rematch store
export const initStore = (initialState = {}) => init({
  models,
  redux: { initialState }
})
