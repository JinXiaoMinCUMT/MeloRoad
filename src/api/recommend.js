import jsonp from 'assets/js/jsonp'
import {commonParams1, options1} from './config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams1)
  return jsonp(url, data, options1)
}

// 获取每个歌手的歌单
export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams1, {
    picmid: 1,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取歌单中的歌
export function getSongList (disstid) {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParams1, {
    type: 1,
    json: 1,
    disstid,
    onlysong: 0,
    needNewCode: 0,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    utf8: 1
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
