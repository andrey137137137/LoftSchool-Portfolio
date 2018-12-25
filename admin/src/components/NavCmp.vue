<template lang="pug">
  nav.nav
    .nav__item(v-for="tab in tabs" :key="tab.href")
      router-link.btn.nav__link(
        :class="isActiveClass(tab.href)"
        :to="tab.href"
      ) {{tab.name}}
</template>

<script>
export default {
  name: "NavCmp",
  data() {
    return {
      tabs: [
        { name: "Обо мне", href: "/about" },
        { name: "Блог", href: "/blog" },
        { name: "Таб 3", href: "/page/50" },
        { name: "Таб 4", href: "/page/70" }
      ]
    };
  },
  methods: {
    isActiveClass(path) {
      return {
        "nav__link-active": this.$route.path === path
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: block;

  &__item {
    border-top: 2px solid $white;

    &:first-child {
      border-top-width: 0;
    }
  }

  &__link {
    border-width: 0;
    @include oneLineBlock(45px);
    color: $grey #f0efe9;
    transition: color $trsTime, background-color $trsTime;

    &:hover,
    &-active {
      color: $blue $white;
    }
  }
}
</style>
