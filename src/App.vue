<template>
  <header>
    <navbar v-for="item in items" :name="item.name" :key="item.id"></navbar>
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
        },
        {
          id: "resources",
          name: "Resources",
        },
        {
          id: "partners",
          name: "Partners",
        },
        {
          id: "company",
          name: "Company",
        },
        {
          id: "login",
          name: "Login",
        },
        {
          id: "language",
          name: "En",
        },
      ],
    };
  },
};
</script>

<style></style>
