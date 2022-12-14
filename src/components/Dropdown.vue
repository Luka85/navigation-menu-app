<template>
  <ul class="dropdown" >
  <li class="dropdown__item">
    {{ item.title }}
     <!-- <a href="" class="dropdown__link">{{ item.name }}</a> -->
    <!-- <ul class="krneki"> -->
      <li v-for="item in item.subItems" class="dropdown__subitem">
        <!-- {{ item.name }} -->
        <a :href="item.link" class="dropdown__link">{{ item.name }}</a>
      </li>
    <!-- </ul> -->
  </li>
  </ul>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    link:{
      type:String
    }
  },
  data() {
    return {};
  },
};
</script>
<style></style>
