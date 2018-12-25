<template lang="pug">
  .form__wrap.form__wrap-textarea(:class="wrapperClass")
    label.form__label(v-if="label") {{label}}
    textarea.form__input(
      v-model="state"
      :class="validationClass"
      :placeholder="placeholder"
      @blur.once="val.$touch()")
    ErrorElem(:type="errorType")
</template>

<script>
import wrapperClass from "../../mixins/wrapperClass";
import formElem from "../../mixins/formElem";
import ErrorElem from "./ErrorElem";

export default {
  name: "TextareaElem",
  components: {
    ErrorElem
  },
  mixins: [wrapperClass, formElem]
};
</script>
