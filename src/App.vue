<template>
  <Title text="TK's Digital Bookshelf" />
  <BookshelfAuthor text="by TK" />
  <BooksPerYear
    v-for="[year, books] in booksPerYear"
    :key="year"
    :books="books"
    :year="year"
  />
</template>

<script>
import Title from './components/Title.vue';
import BookshelfAuthor from './components/BookshelfAuthor.vue';
import BooksPerYear from './components/BooksPerYear.vue';
import { booksPerYear } from './data';

export default {
  name: 'App',
  components: {
    Title,
    BookshelfAuthor,
    BooksPerYear,
  },
  data() {
    return {
      booksPerYear,
    }
  },
}
</script>
