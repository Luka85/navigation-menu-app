<template>
  <ul class="dropdown">
    <!-- <li class="dropdown__item">
      {{ item.title }}
    </li> -->
    <!-- {{
      item.title
    }} -->
    <li v-for="item in item.subItems" class="dropdown__subitem">
      <!-- {{ item.name }} -->
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
    link: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.dropdown {
  background-color: #588288;
  list-style-type: none;
  margin-top: 2.2rem;
  padding: 2rem 3rem;
  border-radius: 0 0 0.5rem 0.5rem;
  /* box-shadow: 0px 0px 20px 0px rgba(97, 143, 150, 0.192); */
}

.dropdown__subitem {
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
