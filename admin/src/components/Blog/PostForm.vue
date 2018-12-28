<template lang="pug">
  ItemForm(
    :handleSubmit="submit"
    :isNew="isNew"
    :disabled="$v.$pending || $v.$invalid"
  )
    FormField(
      v-model="title"
      :val="$v.title"
      placeholder="Название")
    FormField(
      v-if="!isNew"
      v-model="date"
      :val="$v.date"
      placeholder="Дата")
    FormField(
      type="textarea"
      v-model="text"
      :val="$v.text"
      placeholder="Содержание")
</template>

<script>
import {
  required,
  alphaNum,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

import ItemForm from "../ItemForm";
import FormField from "../Form/FormField";

import { mapActions } from "vuex";

export default {
  name: "PostForm",
  components: {
    ItemForm,
    FormField
  },
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    if (this.isNew) {
      return {
        title: "",
        text: ""
      };
    }

    return {
      title: this.post.title,
      date: this.post.date,
      text: this.post.body
    };
  },
  validations() {
    const data = {
      title: {
        required
      },
      text: {
        required,
        minLength: minLength(71)
      }
    };

    if (!this.isNew) {
      data.date = {
        required
      };
    }

    return data;
  },
  methods: {
    ...mapActions(["deletePost", "updatePost", "createPost"]),
    removePost(postId) {
      console.log(postId);

      if (confirm(`Вы уверены, что хотите удалить пост ${postId}?`)) {
        this.deletePost(postId);
      }
    },
    submit(e) {
      if (this.$v.$invalid) {
        return false;
      }

      const data = {
        // id: Math.round(Math.random() * 1000000),
        title: this.title,
        text: this.text
      };

      if (this.isNew) {
        this.createPost(data);
      } else {
        data.date = this.date;
        this.updatePost({ id: this.post._id, data });
      }

      return true;
    }
  }
};
</script>
