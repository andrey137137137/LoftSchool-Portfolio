<template lang="pug">
  .menu(:id="id" :class="containerClass")
    a.menu__link(
      v-for="link in links"
      :key="link.href"
      :class="linkClass"
      :href="link.href"
    ) {{link.name}}
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    inHeader: {
      type: Boolean,
      default: true
    },
    isContent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      links: [
        { name: "index", isContent: !this.isContent, href: "/" },
        { name: "works", isContent: this.isContent, href: "/works" },
        { name: "about", isContent: this.isContent, href: "/about" },
        { name: "blog", isContent: this.isContent, href: "/blog" }
      ]
    };
  },
  computed: {
    id() {
      return this.inHeader && this.isContent ? "main_menu" : "";
    },
    containerClass() {
      if (this.inHeader) {
        return {
          header__menu: true,
          "header__menu-absolute": this.isContent,
          "header__menu-float": !this.isContent
        };
      }

      return {
        footer_top__menu: true
      };
    },
    linkClass() {
      if (this.inHeader) {
        return {};
      }

      return {
        section__title: this.isContent,
        "section__title-large": this.isContent,
        "section__title-underlined": this.isContent,
        btn: !this.isContent
      };
    }
  }
};
</script>
