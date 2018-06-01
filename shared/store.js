'use strict'

import { init } from '@rematch/core'
import * as models from './models'

export const initStore = (initialState = {}) => init({
  models,
  redux: { initialState }
})
