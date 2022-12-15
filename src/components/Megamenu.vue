<template>
  <ul class="dropdown">
    <li class="dropdown__item">
      {{ item.title }}
    </li>
    <!-- {{
      item.title
    }} -->
    <li
      v-for="item in item.subItems"
      v-if="isVisible"
      class="dropdown__subitem"
    >
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
  },
  data() {
    return {};
  },
};
</script>

<style></style>
