<template lang="pug">
  ul#parallax.parallax(:class="{'parallax-scroll': isScrolled}")
    //- .parallax__container
    li.parallax__layer(v-for="i in layers" :key="i")
      img.parallax__img(src=`img/parallax/layer_${key}.png`)
    //- parallax-item(v-for='i in 2' v-bind:index='i')
    //- .parallax__content
</template>

<script>
export default {
  name: "ParallaxCmp",
  props: {
    isScrolled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      layers: 2
    };
  }
};
</script>
