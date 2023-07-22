<template>
  <div class="box">
    <h1>Yangi kino qo'shish</h1>
    <form action="" class="add-form d-flex gap-4">
      <InputB
        :value="this.selectedMovie?.name"
        class="new-movie-label"
        placeholder="Qanday kino?"
        @input="
          (e) => {
            setSelectedMovie({ ...this.selectedMovie, name: e.target.value })
          }
        "
      />
      <InputB
        :value="this.selectedMovie?.viewers"
        class="new-movie-label"
        placeholder="Nechi marotaba ko'rilgan?"
        @input="
          (e) => {
            setSelectedMovie({ ...this.selectedMovie, viewers: e.target.value })
          }
        "
        type="number"
      />
      <ButtonB
        type="submit"
        :class="[selectedMovie?.id ? 'btn-primary' : 'btn-secondary']"
        @click="addMovie"
      >
        {{ selectedMovie?.id ? 'Yangilash' : "Qo'shish" }}
      </ButtonB>
    </form>
  </div>
</template>
<script>
export default {
  name: 'MovieAddForm',
  props: {
    setSelectedMovie: {
      type: Function,
      required: true
    },
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
  }
}
</script>
<style></style>
