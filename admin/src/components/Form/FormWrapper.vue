<template lang="pug">
  .form
    form(action="" method="post" :class="wrapperClass")
      slot
</template>

<script>
import wrapperClass from "../../mixins/wrapperClass";

export default {
  name: "FormWrapper",
  mixins: [wrapperClass]
};
</script>
