<template>
  <hr class="divider">
  <h2>{{ year }}</h2>
  <ul>
    <Book
      v-for="book in books"
      v-bind:read="book.read"
      v-bind:title="book.title"
      v-bind:author="book.author"
      v-bind:url="book.url"
      v-bind:has-article="book.hasArticle"
      v-bind:article-url="book.articleUrl"
      v-bind:key="book.url"
    ></Book>
  </ul>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BooksPerYear',
  components: {
    Book,
  },
  props: {
    year: {
      type: Number,
    },
    books: {
      type: Array,
    },
  },
}
</script>

<style scoped>
h2 {
  font-size: 2rem;
}

hr.divider {
  margin: 40px auto;
  max-width: 50px;
}
</style>
