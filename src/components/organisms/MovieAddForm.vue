<template>
  <div class="box">
    <h1>Yangi kino qo'shish</h1>
    <form action="" class="add-form d-flex gap-4">
      <InputB
        v-model="this.selectedMovie.name"
        class="new-movie-label"
        placeholder="Qanday kino?"
      />
      <InputB
        v-model="this.selectedMovie.viewers"
        placeholder="Nechi marotaba ko'rilgan?"
        type="number"
      />
      <ButtonB
        type="submit"
        :class="[selectedMovie?.id ? 'btn-primary' : 'btn-secondary']"
        @click="addMovie"
      >
        {{ selectedMovie?.id ? 'Yangilash' : "Saqlash" }}
      </ButtonB>
    </form>
  </div>
</template>
<script>
export default {
  name: 'MovieAddForm',
  props: {
    selectedMovie: {
      type: Object,
      required: true
    }
  },
  methods: {
    addMovie(e) {
      e.preventDefault()
      const newMovie = {
        id: this?.selectedMovie?.id || Date.now(),
        name: this?.selectedMovie?.name,
        viewers: this?.selectedMovie?.viewers,
        favourite: this?.selectedMovie?.favourite || false,
        like: this?.selectedMovie?.like || false
      }
      this.$emit('createMovie', newMovie)
    }
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>
<style></style>
