<template lang="pug">
  FormWrapper(@submit.prevent="addNewSkill")
    FormField(
      v-model="title"
      :val="$v.title"
      placeholder="Навык")
    FormField(
      type="number"
      v-model="percents"
      :val="$v.percents"
      placeholder="Владение"
      measure="%")

    .form__row.form__row-buttons
      ButtonElem(
        v-if="!category"
        :wrapperClass="buttonWrapperClass"
        :isDanger="true"
        @click="removePost(post._id)"
      ) Удалить
      ButtonElem(
        :wrapperClass="buttonWrapperClass"
        :disabled="disabled"
      ) {{buttonValue}}
</template>

<script>
import {
  required,
  alphaNum,
  minValue,
  maxValue
} from "vuelidate/lib/validators";

import form from "../../mixins/form";
import FormWrapper from "../Form/FormWrapper";
import FormField from "../Form/FormField";
import InputElem from "../Form/InputElem";
import NumberElem from "../Form/NumberElem";
import ButtonElem from "../Form/ButtonElem";

import { mapMutations } from "vuex";

export default {
  name: "SkillForm",
  components: {
    FormWrapper,
    FormField,
    InputElem,
    NumberElem,
    ButtonElem
  },
  mixins: [form],
  props: {
    category: {
      type: String,
      default: ""
    },
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    if (this.category) {
      return {
        title: "",
        percents: ""
      };
    }

    return {
      title: this.skill.title,
      percents: this.skill.percents
    };
  },
  computed: {
    fields() {
      return {
        title: {
          required
        },
        percents: {
          required,
          minValue: minValue(1),
          maxValue: maxValue(100)
        }
      };
    },
    buttonWrapperClass() {
      return "form__col";
    },
    buttonValue() {
      return this.category ? "Добавить" : "Обновить";
    }
  },
  methods: {
    ...mapMutations(["addSkill", "removeSkill"]),
    addNewSkill() {
      const newSkill = {
        id: Math.round(Math.random() * 1000000),
        name: this.skillName,
        percents: 0,
        type: this.type
      };
      this.$validate().then(success => {
        if (!success) return;
        this.addSkill(newSkill);
        this.skillName = "";
        this.validation.reset();
      });
    },
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
};
</script>
