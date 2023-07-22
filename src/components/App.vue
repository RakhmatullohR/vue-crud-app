<script>
export default {
  data() {
    return {
      movies: [
        {
          id: 1,
          name: 'aaaa',
          viewers: 450,
          favourite: true,
          like: false
        },
        {
          id: 2,
          name: 'bbbb',
          viewers: 550,
          favourite: false,
          like: false
        },
        {
          id: 3,
          name: 'cccc',
          viewers: 650,
          favourite: false,
          like: true
        },
        {
          id: 4,
          name: 'dddd',
          viewers: 750,
          favourite: false,
          like: false
        }
      ],
      searchText: '',
      filter: 'all',
      selectedMovie: { name: '', viewers: '' }
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
      } else {
        if (item?.name) {
          this.movies.push(item)
          this.setSelectedMovie({})
        }
      }
    },
    setSelectedMovie(item) {
      if (item?.id) {
        this.selectedMovie = {
          id: item?.id,
          name: item?.name,
          viewers: item?.viewers,
          favourite: item?.favourite,
          like: item?.like
        }
      } else {
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
      <div class="box">
        <SearchPanel :setSearchText="setSearchText" :searchText="searchText" />
        <AppFilter :setFilter="setFilter" :filter="filter" />
      </div>
      <MovieList
        :movies="onFilter(onSearch(movies, searchText), filter)"
        @onLike2="onLike3"
        @onFavourite2="onFavourite3"
        @onRemove2="onRemove3"
        :setSelectedMovie="setSelectedMovie"
      />
      <MovieAddForm
        @createMovie="createMovie"
        :selectedMovie="selectedMovie"
        :setSelectedMovie="setSelectedMovie"
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
  min-height: 700px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 5rem 0;
}
</style>
