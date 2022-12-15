<template>
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__item" @click="showHide = index">
          <div class="navbar__title">Products</div>
        </li>
        <li
          class="navbar__item"
          v-for="(service, index) in services"
          :key="index"
          @click="showHide = index"
        >
          <div class="navbar__title">{{ service.title }}</div>
          <Dropdown :item="service" v-show="showHide === index"> </Dropdown>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import Megamenu from "./Megamenu.vue";
export default {
  components: {
    Dropdown,
    Megamenu,
  },
  props: {
    category: {
      type: String,
    },
  },

  data() {
    return {
      showHide: null,
      isVisible: false,
      services: [
        // {
        //   title: "Products",
        //   link: "#",

        //   subItems: [
        //     {
        //       name: "Product1",
        //       link: "#",
        //     },
        //     {
        //       name: "Product2",
        //       link: "#",
        //     },
        //     {
        //       name: "Product3",
        //       link: "#",
        //     },
        //     {
        //       name: "Product4",
        //       link: "#",
        //     },
        //     {
        //       name: "Product5",
        //       link: "#",
        //     },
        //     {
        //       name: "Product6",
        //       link: "#",
        //     },
        //     {
        //       name: "Product7",
        //       link: "#",
        //     },
        //     {
        //       name: "Product8",
        //       link: "#",
        //     },
        //     {
        //       name: "Product9",
        //       link: "#",
        //     },

        //     {
        //       name: "Product10",
        //       link: "#",
        //     },
        //   ],
        // },
        {
          title: "Resources",
          link: "#",

          subItems: [
            {
              name: "Newsroom",
              link: "#",
            },
            {
              name: "Case Studies",
              link: "#",
            },
          ],
        },
        {
          title: "Partners",
          link: "#",

          subItems: [
            {
              name: "Technologies",
              link: "#",
            },
            {
              name: "Agencies",
              link: "#",
            },
            {
              name: "Become a partner",
              link: "#",
            },
            {
              name: "Partner Portal",
              link: "#",
            },
          ],
        },
        {
          title: "Company",
          link: "#",

          subItems: [
            {
              name: "About",
              link: "#",
            },
            {
              name: "Careers",
              link: "#",
            },
            {
              name: "Patents",
              link: "#",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleDropMenu(event) {
      this.isVisible = !event.target.isVisible;
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 7rem;
  position: fixed;
  background-color: #588288;
  /* box-shadow: 0px 0px 20px 0px rgba(97, 143, 150, 0.233); */
}

.navbar__list {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.navbar__item {
  width: 100%;
  list-style-type: none;
  padding: 2rem 4rem;
}

.navbar__title {
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.navbar__title:hover {
  border-bottom: 2px solid #cad2c5;
}
.navbar__title:active {
  padding: 0 1rem;
  border-bottom: 2px solid #cad2c5;
}
</style>
