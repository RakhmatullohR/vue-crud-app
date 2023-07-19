<script>
import AppInfo from '@/components/AppInfo.vue'
import SearchPanel from './SearchPanel.vue'
import AppFilter from './AppFilter.vue'
import MovieList from './MovieList.vue'
import MovieAddForm from './MovieAddForm.vue'

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: 'Kino nomi 1',
          viewers: 811,
          favourite: true,
          like: false
        },
        {
          id: 2,
          name: 'Kino nomi 2',
          viewers: 812,
          favourite: false,
          like: false
        },
        {
          id: 3,
          name: 'Kino nomi 3',
          viewers: 813,
          favourite: false,
          like: true
        }
      ]
    }
  },
  methods: {
    createMovie(newM) {
      if (newM.name) {
        this.movies.push(newM)
      }
    },
    onLike3(id) {
      this.movies.forEach((m) => {
        if (m?.id === id) {
          m.like = !m.like
        }
      })
    },
    onFavourite3(id) {
      console.log(id)
      this.movies.forEach((m) => {
        if (m?.id === id) {
          m.favourite = !m.favourite
        }
      })
      console.log(this.movies)
    }
  }
}
</script>
<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :vavouriteMoviesCount="movies.filter((m) => m?.favourite).length"
      />
      <div class="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList :movies="movies" @onLike2="onLike3" @onFavourite2="onFavourite3" />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<style>
.app {
  height: 100vh;
  width: 100%;
  color: #000;
}
.content {
  max-width: 1000px;
  min-height: 700px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
