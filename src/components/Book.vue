<template>
  <li>
    <BookCheck v-bind:read="read"></BookCheck>
    <BookInfo
      v-bind:title="title"
      v-bind:author="author"
      v-bind:url="url"
    ></BookInfo>
    <BookArticle
      v-bind:has-article="hasArticle"  
      v-bind:article-url="articleUrl"  
    ></BookArticle>
  </li>
</template>

<script>
import BookCheck from './BookCheck.vue';
import BookInfo from './BookInfo.vue';
import BookArticle from './BookArticle.vue';

export default {
  name: 'Book',
  components: {
    BookCheck,
    BookInfo,
    BookArticle,
  },
  props: {
    read: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    url: {
      type: String,
    },
    hasArticle: {
      type: Boolean,
    },
    articleUrl: {
      type: String,
    },
  },
}
</script>

<style scoped>
li {
  list-style-type: none;
  margin-left: -40px;
  padding-top: 10px;
  font-size: 19px;
}
</style>