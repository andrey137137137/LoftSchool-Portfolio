<template lang="pug">
  .clearfix.form__wrap.form__wrap-number(:class="wrapperClass")
    .form__row
      label.form__label(v-if="label") {{label}}
      input.form__input(
        type="number"
        v-model="state"
        :class="validationClass"
        :placeholder="placeholder"
        @blur.once="val.$touch()")
      span.form__measure(v-if="measure") {{measure}}
    ErrorElem(:type="errorType")
</template>

<script>
import wrapperClass from "../../mixins/wrapperClass";
import formElem from "../../mixins/formElem";
import ErrorElem from "./ErrorElem";

export default {
  name: "NumberElem",
  components: {
    ErrorElem
  },
  mixins: [wrapperClass, formElem],
  props: {
    measure: {
      type: String,
      default: ""
    }
  }
};
</script>
