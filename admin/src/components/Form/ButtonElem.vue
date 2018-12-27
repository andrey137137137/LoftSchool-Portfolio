<template lang="pug">
  button.btn.form__btn(:type="type" :class="extClass")
    slot
</template>

<script>
import wrapperClass from "../../mixins/wrapperClass";

export default {
  name: "ButtonElem",
  mixins: [wrapperClass],
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
        ...this.wrapperClass
      };
    }
  }
};
</script>
