<template lang="pug">
  .form__wrap.form__wrap-text(:class="addClasses")
    label.form__label(v-if="label") {{label}}
    input.form__input(
      :type="getType"
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
  name: "InputElem",
  components: {
    ErrorElem
  },
  mixins: [addClasses, formElem]
};
</script>
