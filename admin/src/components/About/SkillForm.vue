<template lang="pug">
  ItemForm(
    :handleSubmit="submit"
    :isNew="isNew"
    :disabled="$v.$pending || $v.$invalid"
  )
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
</template>

<script>
import {
  required,
  alphaNum,
  minValue,
  maxValue
} from "vuelidate/lib/validators";

import ItemForm from "../ItemForm";
import FormField from "../Form/FormField";

import { mapActions } from "vuex";

export default {
  name: "SkillForm",
  components: {
    ItemForm,
    FormField
  },
  props: {
    category: {
      type: String,
      default: ""
    },
    skill: {
      type: Object,
      default() {
        return {};
      }
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
    isNew() {
      return this.category ? true : false;
    }
  },
  validations() {
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
  methods: {
    ...mapActions(["addSkill", "removeSkill"]),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    },
    submit(e) {
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
    }
  }
};
</script>
