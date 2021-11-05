import { suite, add, cycle, complete, configure } from 'benny'
import { asciiChartReporter } from 'benny-ascii-chart-reporter'

import * as math from '../src'

suite(
  'math',

  configure({
    cases: {
      minSamples: 10,
      maxTime: 0.25
    }
  }),

  add('add', () => math.add(2, 5)),
  add('sub', () => math.sub(2, 5)),
  add('mul', () => math.mul(2, 5)),
  add('div', () => math.div(2, 5)),

  cycle(),
  complete(asciiChartReporter()),
  complete()
)
