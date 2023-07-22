<template>
  <div class="box">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allMoviesCount }}</p>
    <p class="fs-4 text-uppercase">Yoqqan kinolar soni: {{ vavouriteMoviesCount }}</p>
  </div>
</template>
<script>
export default {
  name: 'AppInfo',
  props: {
    allMoviesCount: {
      type: Number,
      required: true
    },
    vavouriteMoviesCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style></style>
