<template>
  <li
    class="list-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]"
  >
    <span @click="$emit('onLike')" class="list-group-item-label">
      {{ movie?.name }}
    </span>
    <input type="number" class="list-group-item-input" :value="movie?.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm" @click="$emit('onFavourite')">
        <i class="fas fa-cookie"></i>
      </button>
      <button type="button" class="btn-trash btn-sm">
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.list-group-item {
  padding: 15px -20px;
  border-bottom: 1px solid #3d5a80;
}
.list-group-item:last-child {
  padding: 15px -20px;
  border-bottom: none;
}
.list-group-item-label {
  font-size: 20px;
  line-height: 35px;
  width: 550px;
  cursor: pointer;
}
.list-group-item-input {
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  border: none;
  outline: none;
}
.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
}
.list-group-item .btn-cookie {
  color: #e09f3e;
}
.list-group-item .btn-trash {
  color: #e5383b;
}
.list-group-item .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 16px;
  line-height: 35px;
  margin: 3px;
  color: #ffd700;
  transition: all 0.3s;
  transform: translateX(30px);
  opacity: 0;
}
.list-group-item.like .fa-star {
  transform: translateX(0px);
  opacity: 1;
}
.list-group-item.favourite .list-group-item-label,
.list-group-item.favourite .list-group-item-input {
  color: #e09f3e;
}
</style>
