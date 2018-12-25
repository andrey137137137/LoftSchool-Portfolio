<template lang="pug">
  .admin
    HeaderCmp
    NavCmp
    main.section.main
      router-view
</template>

<script>
import HeaderCmp from "./components/HeaderCmp";
import NavCmp from "./components/NavCmp";
// import about from "./components/About";

export default {
  name: "App",
  components: {
    HeaderCmp,
    NavCmp
    // about
  }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
.main {
  background: url("./assets/img/bg.jpg") center center / cover no-repeat;
}
</style>
