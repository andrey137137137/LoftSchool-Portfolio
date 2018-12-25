<template lang="pug">
  header.section.header
    .container
      a.header__link(href='#') Вернуться на сайт
      h2.section__title.header__title Панель администрирования
</template>

<script>
export default {
  name: "HeaderCmp"
};
</script>

<style lang="scss">
.header {
  display: block;
  padding-top: 12px;
  height: 80px;
  color: $white $blue;

  &__title,
  &__link {
    float: right;
  }

  &__link {
    display: block;
    width: 300px;
    text-align: center;
    text-decoration: underline;
    color: inherit;
    opacity: 0.7;
    transition: opacity $trsTime;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  &:after {
    display: block;
    width: 100%;
    height: 0;
    clear: both;
    content: "";
  }
}
</style>
