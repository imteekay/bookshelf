<template>
  <b>
    <a :href="url" target="_blank">
      {{ title }}
    </a>
  </b>
  by {{ author }}
</template>

<script>
export default {
  name: 'BookInfo',
  props: {
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
  },
};
</script>
