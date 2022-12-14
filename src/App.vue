<template>
  <Navbar></Navbar>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
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
  /* background-color: #18132c; */
}
.navbar__list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
}

.navbar__link {
  font-size: 3rem;
}
</style>
