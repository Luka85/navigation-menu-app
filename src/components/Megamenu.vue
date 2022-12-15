<template>
  <ul class="dropdown">
    <li class="dropdown__item" @click="toggleDropMenu">
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
<script></script>

<style></style>
