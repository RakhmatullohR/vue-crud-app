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
.list-group {
  max-height: 570px;
  overflow-y: auto;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(153, 153, 153);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #807f7f;
}
.action {
  min-width: 164px;
  font-size: 20px;
  line-height: 35px;
  text-align: left;
}
</style>
