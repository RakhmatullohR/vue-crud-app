<template>
  <div class="btn-group">
    <ButtonB
      v-for="btn in buttonsData"
      :key="btn?.id"
      class="btn"
      :class="[filter === btn.key ? 'btn-dark' : 'btn-outline-dark']"
      @click="onFilter(btn.key)"
    >
      {{ btn.title }}
    </ButtonB>
  </div>
</template>
<script>
import ButtonB from '../atoms/ButtonB.vue'
export default {
  name: 'AppFilter',
  props: {
    setFilter: {
      type: Function,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttonsData: [
        { title: 'Barcha kinolar', key: 'all' },
        { title: 'Mashxur kinolar', key: 'liked' },
        { title: "Ko'p ko'rilgan kinolar", key: 'most_viewers' }
      ]
    }
  },
  methods: {
    onFilter(filter) {
      this.setFilter(filter)
    }
  },
  components: { ButtonB }
}
</script>
<style></style>
