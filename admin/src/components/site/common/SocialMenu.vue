<template lang="pug">
  div.socials(:class="classes")
    a.icon(
      v-for="link in links"
      :key="link.href"
      :class="icon-" + link.icon + " socials__link"
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
    classes() {
      if (this.inHeader) {
        return {
          header__socials: true,
          "header__socials-left": this.isContent
        };
      }

      return {
        footer_top__socials: true
      };
    }
  }
};
</script>
