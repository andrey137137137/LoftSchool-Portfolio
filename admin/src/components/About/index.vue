<template lang="pug">
  .container
    h1.section__title.section__main_title.main__big_title Страница "Обо мне"
    skill-cat(
      v-for="skillCat in skills"
      :key="skillCat._id"
      :skillCat="skillCat"
    )
</template>

<script>
import skillCat from "./skillCat";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "About",
  components: {
    skillCat
  },
  data() {
    return {
      skillsTypes: ["frontend", "workflow", "backend"]
    };
  },
  computed: {
    ...mapGetters(["skills"])
  },
  methods: {
    ...mapActions(["getSkills"])
  },
  mounted() {
    this.getSkills();
  }
};
</script>
