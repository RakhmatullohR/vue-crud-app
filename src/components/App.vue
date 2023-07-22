<script>
import axios from 'axios'
export default {
  data() {
    return {
      movies: [
        // {
        //   id: 1,
        //   name: 'aaaa',
        //   viewers: 450,
        //   favourite: true,
        //   like: false
        // },
        // {
        //   id: 2,
        //   name: 'bbbb',
        //   viewers: 550,
        //   favourite: false,
        //   like: false
        // },
        // {
        //   id: 3,
        //   name: 'cccc',
        //   viewers: 650,
        //   favourite: false,
        //   like: true
        // },
        // {
        //   id: 4,
        //   name: 'dddd',
        //   viewers: 750,
        //   favourite: false,
        //   like: false
        // }
      ],
      searchText: '',
      filter: 'all',
      selectedMovie: { name: '', viewers: '' },
      show: false,
      isLoading: false,
      errorMessage: ''
    }
  },

  methods: {
    setSearchText(searchText) {
      if (searchText.length) {
        this.searchText = searchText
      } else {
        this.searchText = ''
      }
    },
    onSearch(arr, searchText) {
      if (searchText.length === 0) {
        return arr
      } else {
        return arr.filter((m) => m.name.toLowerCase().includes(searchText.toLowerCase()))
      }
    },
    setFilter(filter) {
      if (filter.length) {
        this.filter = filter
      } else {
        this.filter = ''
      }
    },
    onFilter(arr, filter) {
      switch (filter) {
        case 'liked':
          return arr.filter((m) => m.like === true)
        case 'most_viewers':
          return arr.filter((m) => m.viewers > 600)
        default:
          return arr
      }
    },
    createMovie(item) {
      if (item?.id === this.selectedMovie?.id) {
        this.onRemove3(item?.id, item)
        this.selectedMovie = {}
        this.show = false
      } else {
        if (item?.name) {
          this.movies.push(item)
          this.setSelectedMovie({})
          this.show = false
        }
      }
    },
    setSelectedMovie(item) {
      if (item?.id) {
        this.show = true
        this.selectedMovie = {
          id: item?.id,
          name: item?.name,
          viewers: item?.viewers,
          favourite: item?.favourite,
          like: item?.like
        }
      } else {
        this.show = true
        this.selectedMovie = item
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
      this.movies.forEach((m) => {
        if (m?.id === id) {
          m.favourite = !m.favourite
        }
      })
    },
    onRemove3(id, item) {
      for (let i = 0; i < this.movies.length; i++) {
        const m = this.movies[i]
        if (m?.id == id) {
          if (item?.id) {
            this.movies.splice(i, 1, item)
          } else {
            this.movies.splice(i, 1)
          }
        }
      }
    },
    setShow() {
      this.show = !this.show
    },
    async fetchData() {
      this.isLoading = true
      try {
        return await axios
          .get('https://jsonplaceholder.typicode.com/todos?completed=true&_limit=10')
          .then(({ data }) => {
            this.isLoading = false
            return data
          })
          .catch((err) => {
            this.isLoading = false
            throw err
          })
          .finally(() => {
            this.isLoading = false
          })
      } catch (error) {
        this.isLoading = false
        this.errorMessage = error.message
        let e = error
        return e
      }
    }
  },
  mounted() {
    this.fetchData().then((dataList) => {
      const newMovies = dataList?.map((item) => {
        return {
          id: item?.id,
          name: item?.title,
          viewers: item?.id * 50,
          favourite: false,
          like: false
        }
      })
      this.movies = newMovies
    })
  },
  updated() {
    console.log('Updated')
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
      <div class="box">
        <SearchPanel :setSearchText="setSearchText" :searchText="searchText" />
        <AppFilter :setFilter="setFilter" :filter="filter" :setShow="setShow" :show="show" />
      </div>
      <MovieAddForm
        v-if="this.show"
        @createMovie="createMovie"
        :selectedMovie="selectedMovie"
        :setSelectedMovie="setSelectedMovie"
      />
      <MovieList
        :movies="onFilter(onSearch(movies, searchText), filter)"
        @onLike2="onLike3"
        @onFavourite2="onFavourite3"
        @onRemove2="onRemove3"
        :setSelectedMovie="setSelectedMovie"
        :isLoading="isLoading"
        :errorMessage="errorMessage"
      />
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
  height: 100%;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
}
</style>
