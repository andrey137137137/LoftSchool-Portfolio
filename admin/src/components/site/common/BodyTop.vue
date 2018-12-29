<template lang="pug">
  div
    PreloaderCmp
    ParallaxCmp(:addClasses="addClasses")
</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "BodyTop",
  mixins: [addClasses]
};
</script>
