<template lang="pug">
  .form__group
    legend.form__legend {{skillCat.category}}
    SkillForm(
      v-for="skill in skillCat.skills"
      :key="skill._id"
      :skill="skill")

    legend.form__legend Добавить навык
    SkillForm(:category="skillCat.category")
</template>

<script>
import SkillForm from "./SkillForm";

export default {
  components: {
    SkillForm
  },
  props: {
    // skillType: String,
    skillCat: Object
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case "frontend":
          return 1;
        case "workflow":
          return 2;
        case "backend":
          return 3;
      }
    }
  }
};
</script>
