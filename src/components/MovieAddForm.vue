<template>
  <div class="movie-add-form">
    <h1>Yangi kino qo'shish</h1>
    <form action="" class="add-form d-flex gap-4">
      <input
        type="text"
        :value="name"
        id=""
        class="form-control new-movie-label"
        placeholder="Qanday kino?"
        @input="name = $event.target.value"
      />
      <input
        type="number"
        :value="viewers"
        id=""
        class="form-control new-movie-label"
        placeholder="Nechi marotaba ko'rilgan?"
        @input="viewers = $event.target.value"
      />
      <button type="submit" class="btn btn-outline-dark" @click="addMovie">Qo'shish</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      viewers: ''
    }
  },
  methods: {
    addMovie(e) {
      e.preventDefault()
      const newMovie = {
        id: Date.now(),
        name: this.name,
        viewers: this.viewers,
        favourite: false,
        like: false
      }
      this.$emit('createMovie', newMovie)
      this.name = ''
      this.viewers = ''
    }
  }
}
</script>
<style>
.movie-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
