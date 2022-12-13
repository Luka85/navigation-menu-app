<template>
  <header class="header">
    <nav class="navbar">
      <navbar
        v-for="item in items"
        :name="item.name"
        :key="item.id"
        :link="item.link"
      ></navbar>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "products",
          name: "Products",
          link: "#",
        },
        {
          id: "resources",
          name: "Resources",
          link: "#",
        },
        {
          id: "partners",
          name: "Partners",
          link: "#",
        },
        {
          id: "company",
          name: "Company",
          link: "#",
        },
      ],
      resources: [
        {
          name1: "Newsroom",
        },
      ],
    };
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #dad8dd;
  background-color: #18132c;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
}
</style>
