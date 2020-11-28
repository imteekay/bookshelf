<template>
  <span v-if="hasArticle" class="medium-post">
    <a :href="articleUrl">
      <i class="fa fa-medium" />
    </a>
  </span>
</template>

<script>
export default {
  name: 'BookArticle',
  props: {
    hasArticle: {
      type: Boolean,
      required: true,
    },
    articleUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
span.medium-post {
  margin-left: 5px;
}

.fa-medium {
  color: #0be370;
}
</style>
