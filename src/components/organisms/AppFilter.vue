<template>
  <div class="d-flex justify-content-between">
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
    <ButtonB v-if="!show" class="btn-info" @click="setShow">Add</ButtonB>
  </div>
</template>
<script>
import ButtonB from '../atoms/ButtonB.vue'
export default {
  name: 'AppFilter',
  props: {
    setShow: {
      type: Function,
      required: true
    },
    setFilter: {
      type: Function,
      required: true
    },
    filter: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
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
