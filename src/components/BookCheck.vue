<template>
  <span
    v-if="read"
    class="book-read"
  >
    <i class="fa fa-check" />
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
