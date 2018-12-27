<template lang="pug">
  FormWrapper(@submit.prevent="submit")
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
        @click="removePost(post._id)"
      ) Удалить
      ButtonElem(
        :wrapperClass="buttonWrapperClass"
      ) {{buttonValue}}
        //- :disabled="disabled"
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

import { mapMutations } from "vuex";

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
      return "form__col";
    },
    buttonValue() {
      return this.isNew ? "Добавить" : "Обновить";
    }
  },
  methods: {
    ...mapMutations(["deletePost", "updatePost", "createPost"]),
    removePost(postId) {
      this.deletePost(postId);
    },
    submit(e) {
      if (!this.$v.$invalid) {
        const data = {
          // id: Math.round(Math.random() * 1000000),
          title: this.title,
          text: this.text
        };

        console.log(data);

        if (this.isNew) {
          this.createPost(data);
        } else {
          data.date = this.date;
          this.updatePost({ id: this.post._id, data });
        }

        return true;
      }
    }
  }
};
</script>
