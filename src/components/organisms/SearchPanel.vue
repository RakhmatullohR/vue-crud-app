<template>
  <InputB
    :value="searchText"
    class="search-input"
    placeholder="kinolarni qidirish ..."
    @input="(e) => setSearchText(e.target.value)"
  />
</template>
<script>
export default {
  name: 'SearchPanel',
  props: {
    setSearchText: {
      type: Function,
      required: true
    },
    searchText: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.search-input {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
