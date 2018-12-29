<template lang="pug">
  header#header.section.header(:class="addClasses")
  header#header.section.header.header-wide(class={'header-blog': page.name == 'blog'})
</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "HeaderWrapper",
  mixins: [addClasses]
};
</script>
