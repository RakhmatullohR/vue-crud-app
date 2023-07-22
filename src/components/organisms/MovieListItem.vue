<template>
  <li
    class="list-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]"
  >
    <span class="list-group-item-name">
      {{ movie?.name }}
    </span>
    <div class="list-group-item-viewers">{{ movie?.viewers }}</div>
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm" @click="$emit('onFavourite')">
        <i class="fas fa-cookie"></i>
      </button>
      <button type="button" class="btn-trash btn-sm" @click="$emit('onRemove')">
        <i class="fas fa-trash"></i>
      </button>
      <button @click="setSelectedMovie(movie)" type="button" class="btn-edit btn-sm">
        <i class="fas fa-edit"></i>
      </button>
      <i @click="$emit('onLike')" class="fas fa-star"></i>
    </div>
  </li>
</template>
<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
      required: true
    },
    setSelectedMovie: {
      type: Function,
      required: true
    }
  }
}
</script>
<style>
.list-group-item {
  padding: 15px -20px;
  border-bottom: 1px solid #3d5a80;
  gap: 20px;
}
.list-group-item:last-child {
  padding: 15px -20px;
  border-bottom: none;
}
.list-group-item-name {
  font-size: 20px;
  line-height: 35px;
  width: 550px;
  cursor: pointer;
}
.list-group-item-viewers {
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
  color: #926b47;
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
  cursor: pointer;
  color: #818080;
  transition: all 0.3s;
}

.list-group-item.like .fa-star {
  color: #ffd700;
}
.list-group-item.favourite .list-group-item-name,
.list-group-item.favourite .btn-cookie,
.list-group-item.favourite .list-group-item-viewers {
  color: #e09f3e;
}
</style>
