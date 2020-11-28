<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}
</style>
