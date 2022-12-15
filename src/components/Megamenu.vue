<template>
  <ul class="megamenu">
    <li v-for="product in subItemsProducts" class="megamenu__subitem">
      <a :href="product.link" class="megamenu__link">{{ product.name }}</a>
      <img
        class="megamenu__thumbnail"
        src="../assets/imani-bahati-LxVxPA1LOVM-unsplash (1).jpg"
        alt="Nike Trainers"
      />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    subItemsProducts: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.megamenu {
  background-color: #588288;
  list-style-type: none;
  margin-top: 2.2rem;
  padding: 2rem 3rem;
  border-radius: 0 0 0.5rem 0.5rem;
  position: absolute;
  top: 4.8rem;
  left: 3rem;
  width: 90%;
  max-height: 80vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  justify-content: center;
  padding: 0 6rem;
}
.megamenu__subitem {
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.megamenu__link {
  border-bottom: 2px solid transparent;
  margin-bottom: 0.5rem;
}

.megamenu__link:visited,
.megamenu__link:link {
  text-decoration: none;
  color: #e5e3e9;
  font-size: 1.5rem;
}

.megamenu__link:hover,
.megamenu__item:hover {
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
}
.megamenu__link:active,
.megamenu__item:active {
  padding: 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
}

.megamenu__thumbnail {
  width: 20rem;
  height: auto;
  border-radius: 1rem;
}
</style>
