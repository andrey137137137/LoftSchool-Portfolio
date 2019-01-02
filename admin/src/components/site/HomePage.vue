<template lang="pug">
  div
    BodyTop
    HeaderWrapper(:addClasses="{'header-framed': true}")
      #flip_container.container.header__container.header__container-framed
        .header__flip_wrap
          HeaderContent
          NavCmp
        LoginCmp(:addClasses="formClasses")
    FooterWrapper(:isToUp="false")
</template>

<script>
export default {
  name: "HomePage",
  props: {
    isBlog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formClasses: {
        header__flip_wrap: true,
        "header__flip_wrap-back": true
      }
    };
  }
};
</script>
