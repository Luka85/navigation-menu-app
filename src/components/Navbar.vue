<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <a class="navbar__link" href="#">{{ name }}</a>
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
  },
};
</script>

<style></style>
