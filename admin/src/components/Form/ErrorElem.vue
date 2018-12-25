<template lang="pug">
  .form__error_wrap
    .form__error(v-show="type") {{error}}
</template>

<script>
import exist from "../../helpers/exist";
import errors from "../../constants/validation/errors";

export default {
  name: "ErrorElem",
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    error() {
      if (!this.type) {
        return "";
      }

      return exist(this.type, errors) ? errors[this.type] : errors.other;
    },
    required() {
      return this.type == "required" ? true : false;
    }
  }
};
</script>
