import jsonp from 'assets/js/jsonp'
import {commonParams, options} from './config.js'

export default function getTravelNotes () {
  const url = 'https://touch.travel.qunar.com/search'
  const data = Object.assign({}, commonParams, {
    page: 1
  })

  return jsonp(url, data, options)
}
