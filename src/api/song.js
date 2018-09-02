import jsonp from 'assets/js/jsonp'
import {options1} from './config.js'

export function getSongs () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, {
    g_tk: 1928093487,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    singermid: '002J4UUk29y8BY',
    songstatus: 1,
    platform: 'yqq',
    num: 30
  })

  return jsonp(url, data, options1)
}
