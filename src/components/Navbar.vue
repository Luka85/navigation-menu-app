<template>
  <ul class="navbar__list">
    <li class="navbar__item">
      <a :href="link" class="navbar__link">{{ name }}</a>
    </li>
  </ul>
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
  data() {
    return {};
  },
};
</script>

<style></style>
