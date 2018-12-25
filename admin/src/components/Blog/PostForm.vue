<template lang="pug">
  FormWrapper(@submit.prevent="update")
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
        :disabled="disabled"
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
    ...mapMutations(["deletePost", "createPost"]),
    removePost(postId) {
      this.deletePost(postId);
    },
    update(e) {
      if (this.post.title && this.post.body) {
        const newPost = {
          // id: Math.round(Math.random() * 1000000),
          title: this.post.title,
          text: this.post.body,
          date: Date.now
        };

        this.createPost(newPost);

        return true;
      }

      this.errors = [];

      if (!this.title) {
        this.errors.push("Название не может быть пустым");
      }

      if (!this.text) {
        this.errors.push("Текст не может быть пустым");
      }

      e.preventDefault();

      // this.$validate().then(success => {
      //   if (!success) return;
      //   this.createPost(newPost);
      //   this.title = "";
      //   this.text = "";
      //   this.validation.reset();
      // });
    },
    create() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const newPost = {
            // id: Math.round(Math.random() * 1000000),
            title: this.title,
            text: this.text
            // date: new Date()
          };

          console.log(newPost);
          // this.createPost(newPost);

          return true;
        }

        alert("Correct all errors!");
      });
    }
  }
};
</script>
