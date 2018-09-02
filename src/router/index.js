import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载，切换到相应路由时再加载对应代码块
const NoteDetail = (resolve) => {
  import('pages/noteDetail/NoteDetail').then((module) => {
    resolve(module)
  })
}

const Music = (resolve) => {
  import('pages/music/music').then((module) => {
    resolve(module)
  })
}

const MusicRank = (resolve) => {
  import('pages/music/music-rank').then((module) => {
    resolve(module)
  })
}

const MusicSingerDetail = (resolve) => {
  import('pages/music/music-singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicDescDetail = (resolve) => {
  import('pages/music/music-desc-detail').then((module) => {
    resolve(module)
  })
}

const MusicRankDetail = (resolve) => {
  import('pages/music/music-rank-detail').then((module) => {
    resolve(module)
  })
}

const MusicDesc = (resolve) => {
  import('pages/music/music-desc').then((module) => {
    resolve(module)
  })
}

const MusicSinger = (resolve) => {
  import('pages/music/music-singer').then((module) => {
    resolve(module)
  })
}

const MusicSearch = (resolve) => {
  import('pages/music/music-search').then((module) => {
    resolve(module)
  })
}

const MusicHome = (resolve) => {
  import('pages/music/music-home').then((module) => {
    resolve(module)
  })
}

const Explore = (resolve) => {
  import('pages/explore/explore').then((module) => {
    resolve(module)
  })
}

const Home = (resolve) => {
  import('pages/home/home').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/note/:id',
      name: 'NoteDetail',
      component: NoteDetail
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/music',
      redirect: '/music/music-home'
    },
    {
      path: '/music',
      name: 'Muisc',
      component: Music,
      children: [
        {
          path: '/music/music-home',
          name: 'MusicHome',
          component: MusicHome
        },
        {
          path: '/music/music-desc',
          name: 'MusicDesc',
          component: MusicDesc,
          children: [
            {
              path: ':id',
              component: MusicDescDetail
            }
          ]
        },
        {
          path: '/music/music-singer',
          name: 'MusicSinger',
          component: MusicSinger,
          children: [
            {
              path: ':id',
              component: MusicSingerDetail
            }
          ]
        },
        {
          path: '/music/music-rank',
          name: 'MusicRank',
          component: MusicRank,
          children: [
            {
              path: ':id',
              component: MusicRankDetail
            }
          ]
        }

      ]
    },
    {
      path: '/music-search',
      name: 'MusicSearch',
      component: MusicSearch,
      children: [
        {
          path: ':id',
          component: MusicSingerDetail
        }
      ]
    }
  ]
})
