<template lang="pug">
  svg(:class=addClasses)
    use(:xlink:href=`../svg/symbol/svg/sprite.symbol.svg#${id}`)
</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "SvgCmp",
  mixins: [addClasses],
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>
