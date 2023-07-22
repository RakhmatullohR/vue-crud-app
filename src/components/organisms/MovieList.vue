<script>
export default {
  name: 'MovieList',
  props: {
    movies: {
      type: Array,
      required: true
    },
    setSelectedMovie: {
      type: Function,
      required: true
    }
  }
}
</script>
<template>
  <ul class="box list-group">
    <li class="list-group-item d-flex justify-content-between text-light bg-secondary">
      <div class="list-group-item-name">name</div>
      <div class="list-group-item-viewers text-left">view</div>
      <div class="action">action</div>
    </li>
    <MovieListItem
      v-for="movie in movies"
      :key="movie?.id"
      :movie="movie"
      @onLike="$emit('onLike2', movie.id)"
      @onFavourite="$emit('onFavourite2', movie.id)"
      @onRemove="$emit('onRemove2', movie.id)"
      :setSelectedMovie="setSelectedMovie"
    />
  </ul>
</template>

<style scoped>
.action {
  min-width: 164px;
  font-size: 20px;
  line-height: 35px;
  text-align: left;
}
</style>
