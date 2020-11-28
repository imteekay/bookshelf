<template>
  <span class="medium-post" v-if="hasArticle">
    <a :href="articleUrl">
      <i class='fa fa-medium'></i>
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
    }
  },  
}
</script>

<style scoped>
span.medium-post {
  margin-left: 5px;
}

.fa-medium {
  color: #0BE370;
}
</style>
