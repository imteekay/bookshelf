<template>
  <li>
    <BookCheck :read="read" />
    <BookInfo :title="title" :author="author" :url="url" />
    <BookArticle :has-article="hasArticle" :article-url="articleUrl" />
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
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
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
li {
  list-style-type: none;
  margin-left: -40px;
  padding-top: 10px;
  font-size: 19px;
}
</style>
