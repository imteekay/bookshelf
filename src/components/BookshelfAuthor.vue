<template>
  <p class='by-tk'>{{ text }}</p>
</template>

<script>
export default {
  name: 'BookshelfAuthor',
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
p.by-tk {
  margin-bottom: 10px;
}
</style>
