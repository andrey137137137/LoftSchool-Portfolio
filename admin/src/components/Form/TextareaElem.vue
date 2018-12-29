<template lang="pug">
  .form__wrap.form__wrap-textarea(:class="addClasses")
    label.form__label(v-if="label") {{label}}
    textarea.form__input(
      v-model="state"
      :class="validationClass"
      :placeholder="placeholder"
      @blur.once="val.$touch()")
    ErrorElem(:type="errorType")
</template>

<script>
import addClasses from "../../mixins/addClasses";
import formElem from "../../mixins/formElem";
import ErrorElem from "./ErrorElem";

export default {
  name: "TextareaElem",
  components: {
    ErrorElem
  },
  mixins: [addClasses, formElem]
};
</script>
