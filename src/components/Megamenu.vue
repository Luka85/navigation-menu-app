<template>
  <ul class="megamenu">
    <div class="megamenu-thumbnail__container">
      <figure
        v-for="(product, index) in subItemsProducts"
        class="megamenu__subitem"
      >
        <figcaption class="megamenu__link-container">
          <a :href="product.link" class="megamenu__link"
            >{{ product.name }} {{ index + 1 }}</a
          >
        </figcaption>
        <a href="#" class="megamenu__thumbnail-link">
          <img
            class="megamenu__thumbnail"
            :src="product.src"
            alt="Nike Trainers"
          />
        </a>
      </figure>
    </div>
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
  margin-top: 2rem;

  border-radius: 0 0 0.5rem 0.5rem;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  max-height: 85vh;
  padding: 0 4rem;
}

.megamenu-thumbnail__container {
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  overflow-x: scroll;
  grid-column-gap: 2rem;
  margin-bottom: 3rem;
}

.megamenu-thumbnail__container::-webkit-scrollbar {
  height: 0.5rem;
}

.megamenu-thumbnail__container::-webkit-scrollbar-track {
  background-color: transparent;
}
.megamenu-thumbnail__container::-webkit-scrollbar-thumb {
  background-color: #cad2c5;
  border-radius: 1rem;
}
.megamenu-thumbnail__container::-webkit-scrollbar-thumb:hover {
  background-color: #e7f0e1;
  border-radius: 1rem;
  cursor: pointer;
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

.megamenu__thumbnail {
  width: 20rem;
  height: auto;
  border-radius: 1rem;
}
</style>
