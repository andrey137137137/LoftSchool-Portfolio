<template lang="pug">
  FormWrapper(@submit.prevent.native="handleSubmit")
    slot

    .form__row.form__row-buttons
      ButtonElem(
        v-if="!isNew"
        :wrapperClass="buttonWrapperClass"
        :isDanger="true"
        @click.prevent.native="handleDelete"
      ) Удалить
      ButtonElem(
        :disabled="disabled"
        :wrapperClass="buttonWrapperClass"
      ) {{buttonValue}}
</template>

<script>
import FormWrapper from "./Form/FormWrapper";
import FormField from "./Form/FormField";
import ButtonElem from "./Form/ButtonElem";

import { mapActions } from "vuex";

export default {
  name: "ItemForm",
  components: {
    FormWrapper,
    FormField,
    ButtonElem
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    handleDelete: {
      type: Function,
      default: () => {}
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonWrapperClass() {
      return { form__col: true, "form__btn-disabled": this.disabled };
    },
    buttonValue() {
      return this.isNew ? "Добавить" : "Обновить";
    }
  }
};
</script>
