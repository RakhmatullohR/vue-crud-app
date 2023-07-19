<script>
import MovieListItem from './MovieListItem.vue'
export default {
  components: { MovieListItem },
  props: {
    movies: {
      type: Array,
      requiered: true
    }
  }
}
</script>
<template>
  <ul class="movie-list list-group">
    <MovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @onLike="$emit('onLike2', movie.id)"
      @onFavourite="$emit('onFavourite2', movie.id)"
    />
  </ul>
</template>

<style scoped>
.movie-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
