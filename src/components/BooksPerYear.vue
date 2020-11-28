<template>
  <hr class="divider">
  <h2>{{ year }}</h2>
  <ul>
    <Book
      v-for="book in books"
      :key="book.url"
      :read="book.read"
      :title="book.title"
      :author="book.author"
      :url="book.url"
      :has-article="book.hasArticle"
      :article-url="book.articleUrl"
    />
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
      required: true,
    },
    books: {
      type: Array,
      required: true,
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
