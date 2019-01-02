<template lang="pug">
  .socials(:class="containerClass")
    a.icon.socials__link(
      v-for="link in links"
      :key="link.href"
      :class="iconClass(link.icon)"
      target="_blank"
      :href="link.href"
      :title="link.name")
</template>

<script>
export default {
  name: "SocialMenu",
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
        { name: "index", href: "/" },
        { name: "works", href: "/works" },
        { name: "about", href: "/about" },
        { name: "blog", href: "/blog" }
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
          header__socials: true,
          "header__socials-left": this.isContent
        };
      }

      return {
        footer_top__socials: true
      };
    },
    iconClass: icon => {
      return { [`icon-${icon}`]: true };
    }
  }
};
</script>
