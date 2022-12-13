<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <a :href="link" class="navbar__link">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style></style>
