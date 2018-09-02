import jsonp from 'assets/js/jsonp'
import {commonParams1, options1} from './config.js'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams1, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    channel: 'singer',
    key: 'all_all_all',
    page: 'list',
    pagesize: 100,
    pagenum: 1,
    needNewCode: 0
  })

  return jsonp(url, data, options1)
}

export function getSingerDetail (singermid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams1, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 30,
    songstatus: 1,
    singermid
  })
  return jsonp(url, data, options1)
}
