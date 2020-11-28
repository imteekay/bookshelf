<template>
  <span class='book-read' v-if="read">
    <i class="fa fa-check"></i>
  </span>
</template>

<script>
export default {
  name: 'BookCheck',
  props: {
    read: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
span.book-read {
  margin-right: 5px;
  color: #0BE370;
  display: inline-block;
}
</style>
