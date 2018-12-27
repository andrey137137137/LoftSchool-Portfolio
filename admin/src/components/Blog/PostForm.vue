<template lang="pug">
  FormWrapper(@submit.prevent.native="submit")
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

    .form__row.form__row-buttons
      ButtonElem(
        v-if="!isNew"
        :wrapperClass="buttonWrapperClass"
        :isDanger="true"
        @click.prevent.native="removePost(post._id)"
      ) Удалить
      ButtonElem(
        :disabled="$v.$invalid"
        :wrapperClass="buttonWrapperClass"
      ) {{buttonValue}}
</template>

<script>
import {
  required,
  alphaNum,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";

import form from "../../mixins/form";
import FormWrapper from "../Form/FormWrapper";
import FormField from "../Form/FormField";
import InputElem from "../Form/InputElem";
import TextareaElem from "../Form/TextareaElem";
import ButtonElem from "../Form/ButtonElem";

import { mapActions } from "vuex";

export default {
  name: "PostForm",
  components: {
    FormWrapper,
    FormField,
    InputElem,
    TextareaElem,
    ButtonElem
  },
  mixins: [form],
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      default: () => {}
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
  computed: {
    fields() {
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
    buttonWrapperClass() {
      return { form__col: true, "form__btn-disabled": this.$v.$invalid };
    },
    buttonValue() {
      return this.isNew ? "Добавить" : "Обновить";
    }
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
