<template lang="pug">
  #preloader.preloader.preloader-active
    .preloader__container
      //- svg.preloader__circles
      //-   use(xlink:href="../img/night.svg#preloader")
      svg.preloader__circles
        circle.preloader__center_circle
        circle.preloader__satellite_circle
      .preloader__counter
</template>

<script>
export default {
  name: "PreloaderCmp"
};
</script>
