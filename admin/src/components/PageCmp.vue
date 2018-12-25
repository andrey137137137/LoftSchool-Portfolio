<template lang="pug">
  div
    h1 this is page {{ pageId }}
    .icon
</template>

<script>
export default {
  name: "PageCmp",
  props: {
    pageId: String
  }
};
</script>

<style lang="scss">
.icon {
  background: svg("../assets/img/icons/phone.svg", "#ccc") center center
    no-repeat;
  width: 40px;
  height: 40px;

  &:hover {
    background-image: svg("../assets/img/icons/phone.svg", "#0a0");
  }
}
</style>
