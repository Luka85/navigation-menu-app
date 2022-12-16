<template>
  <ul class="megamenu">
    <i class="fa-solid fa-chevron-left fa-2x megamenu__slider--left"></i>
    <i class="fa-solid fa-chevron-right fa-2x megamenu__slider--right"></i>
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
  /* display: grid; */
  /* grid-template-columns: repeat(4, minmax(20rem, 1fr));
  grid-template-rows: repeat(2, 1fr); */
  /* grid-gap: 3rem; */
  /* justify-content: center; */
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
  padding: 0 8rem;

  /* overflow: hidden; */
}
.megamenu__subitem {
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.megamenu__subitem:not(:last-child) {
  /* margin-right: 2rem; */
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

/* .megamenu__link:hover,
.megamenu__item:hover {
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
}
.megamenu__link:active,
.megamenu__item:active {
  padding: 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #cad2c5;
} */

.megamenu__thumbnail {
  width: 20rem;
  height: auto;
  border-radius: 1rem;
}
.megamenu-thumbnail__container {
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  overflow-x: scroll;
  grid-column-gap: 2rem;
  margin-bottom: 3rem;
}

.megamenu__slider--left {
  position: absolute;
  top: 45%;
  left: 2rem;
  cursor: pointer;
}
.megamenu__slider--left:hover,
.megamenu__slider--right:hover {
  cursor: pointer;
}
.megamenu__slider--right {
  position: absolute;
  top: 45%;
  right: 2rem;
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
</style>
