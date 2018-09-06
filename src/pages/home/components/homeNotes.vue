<template>
  <div class="notes-container">
    <ul>
      <li v-for="note in notesList" :key="note.id" @click="selectItem(note.id)">
        <div class="note"  ref="link">
          <div class="note-info">
            <h3 class="info-title">{{note.title}}</h3>
            <p class="info-content"></p>
          </div>
          <div class="note-img">
            <img v-lazy="note.imageUrl">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import getTravelNotes from '@/api/travelNotes.js'
import {ERR_OK} from '@/api/config'
import { mapMutations } from 'vuex'
export default {
  name: 'HomeNotes',
  data () {
    return {
      notesList: []
    }
  },
  created () {
    this._getTravelNotes()
  },
  methods: {
    _getTravelNotes () {
      getTravelNotes().then((res) => {
        if (res.errcode === ERR_OK) {
          this.notesList = res.data.bookList
        }
      })
    },
    selectItem (id) {
      this.setNoteID(id)
      this.$router.push(`/note/${id}`)
      // this.$refs.link[index].href = `https://touch.travel.qunar.com/youji/${id}`
    },
    ...mapMutations({
      setNoteID: 'SET_NOTEID'
    })
  }
}
</script>

<style scoped lang="stylus">
  .notes-container
    padding: .3rem .2rem
    .note
      display: flex
      height: 3rem
      .note-info
        width: 70%
        .info-title
          padding-top: .4rem
          padding-right: .3rem
          color: #000
          font-size: .35rem
          line-height: 1.41
          font-weight: 500
          margin-bottom: .2rem
        .info-content
          color: #aaa
          font-size: .25rem
          line-height: 1.5
      .note-img
        width: 30%
        padding-top: .5rem
        img
          width: 2rem
          height: 2rem
</style>
