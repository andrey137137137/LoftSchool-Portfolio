<template lang="pug">
  article.header__article(:class="articleClass")

    SvgCmp(v-if="isContent" id="stars1" :addClasses="svgClass")

    a.img_wrap.header__avatar(:class="avatarClass" href="/")
      img.img_wrap__img(src="userfiles/avatar.jpg" alt="Аватарка")

    HeaderTitle(:isRelative="isContent", :isLarge="isBlog")
</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "HeaderContent",
  mixins: [addClasses],
  props: {
    isBlog: {
      type: Boolean,
      required: true
    },
    isContent: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    articleClass() {
      return {
        "header__article-relative": this.isContent,
        "header__article-padding": !this.isContent
      };
    },
    svgClass() {
      return {
        header__logo: true,
        "header__logo-for_blog": this.isBlog
      };
    },
    avatarClass() {
      return { "header__avatar-relative": this.isContent };
    }
  }
};
</script>
