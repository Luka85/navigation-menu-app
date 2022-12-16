<template>
  <ul class="dropdown">
    <li v-for="item in item.subItems" class="dropdown__subitem">
      <a :href="item.link" class="dropdown__link">{{ item.name }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.dropdown {
  list-style-type: none;
  padding: 2rem 0 0.5rem 0;
}

.dropdown__subitem:not(:last-child) {
  margin-bottom: 1.3rem;
}

.dropdown__link {
  border-bottom: 2px solid transparent;
}

.dropdown__link:visited,
.dropdown__link:link {
  text-decoration: none;
  color: #e5e3e9;
  font-size: 1.5rem;
}

.dropdown__link:hover,
.dropdown__item:hover {
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
}
.dropdown__link:active,
.dropdown__item:active {
  padding: 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
}
</style>
