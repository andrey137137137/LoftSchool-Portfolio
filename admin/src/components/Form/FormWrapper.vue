<template lang="pug">
  .form
    form(:class="wrapperClass")
      slot
</template>

<script>
import wrapperClass from "../../mixins/wrapperClass";

export default {
  name: "FormWrapper",
  mixins: [wrapperClass]
};
</script>
