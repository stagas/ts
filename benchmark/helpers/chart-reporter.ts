import Chartscii, { ChartData, Options } from 'chartscii'
import type { Summary } from 'benny/lib/internal/common-types'

export const chartReporter = (summary: Summary) => {
  const charts = new Chartscii(
    summary.results.map(
      r =>
        <ChartData>{
          value: r.ops,
          label:
            (r.percentSlower ? '(-' + r.percentSlower + '%) ' : '') + r.name,
          color: !r.percentSlower ? 'green' : 'pink'
        }
    ),
    <Options>{
      theme: 'lush',
      sort: false,
      char: '■',
      width: 30,
      reverse: true,
      colorLabels: true
    }
  )
  console.log()
  console.log(charts.create())
}
