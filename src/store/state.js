import {playMode} from 'assets/js/config.js'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: playMode.sequence,
  mode: {},
  currentIndex: -1,
  disc: {},
  topList: {},
  noteID: ''

}

export default state
