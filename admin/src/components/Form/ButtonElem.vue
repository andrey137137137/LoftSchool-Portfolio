<template lang="pug">
  button.btn.form__btn(type="button" :class="extClass")
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
    extClass() {
      const firstClass = this.isDanger ? "form__btn-danger" : "";

      if (!this.wrapperClass) {
        return firstClass;
      }

      if (Array.isArray(this.wrapperClass)) {
        return [firstClass, ...this.wrapperClass];
      }

      return `${firstClass} ${this.wrapperClass}`;
    }
  }
};
</script>
