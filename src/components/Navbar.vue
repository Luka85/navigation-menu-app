<template>
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="(service, i) in services" :key="i">
          <Dropdown :item="service" @click="toggleDropMenu"> </Dropdown>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  props: {
    category: {
      type: String,
    },
  },

  data() {
    return {
      show: true,

      services: [
        {
          title: "Products",
          link: "#",

          subItems: [
            {
              name: "Product1",
              link: "#",
            },
            {
              name: "Product2",
              link: "#",
            },
            {
              name: "Product3",
              link: "#",
            },
            {
              name: "Product4",
              link: "#",
            },
            {
              name: "Product5",
              link: "#",
            },
            {
              name: "Product6",
              link: "#",
            },
            {
              name: "Product7",
              link: "#",
            },
            {
              name: "Product8",
              link: "#",
            },
            {
              name: "Product9",
              link: "#",
            },

            {
              name: "Product10",
              link: "#",
            },
          ],
        },
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
    toggleDropMenu() {
      console.log("click");
      this.show = !this.show;
    },
  },
};
</script>

<style>
.navbar__list {
  border: 2px solid black;
}
</style>
