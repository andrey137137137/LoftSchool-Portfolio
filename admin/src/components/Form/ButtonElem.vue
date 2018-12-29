<template lang="pug">
  button.btn.form__btn(:type="type" :class="extClass")
    slot
</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "ButtonElem",
  mixins: [addClasses],
  props: {
    isDanger: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type() {
      return this.isDanger ? "button" : "submit";
    },
    extClass() {
      return {
        "form__btn-danger": this.isDanger,
        ...this.addClasses
      };
    }
  }
};
</script>
