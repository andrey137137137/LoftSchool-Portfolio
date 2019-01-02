<template lang="pug">
  FormWrapper#login_form(
    :addClasses="{login_form: true, ...addClasses}"
    @submit.prevent.native="handleSubmit")

    .login_form__top_wrap
      h2.section__title.section__title-uppercase.login_form__title= title

      .form__row.form__row-text_wrap.form__row-icon_label_wrap.login_form__row
        label.form__label.form__label-icon
        input(type="text").form__input.login_form__text_input

      .form__row.form__row-text_wrap.form__row-icon_label_wrap.login_form__row
        label.form__label.form__label-icon
        input(type="password", name="").form__input.login_form__text_input

      .form__row.form__row-checkbox_wrap.login_form__checkbox_wrap
        input.form__input(id="login_form__checkbox" type="checkbox", name="login_form__checkbox")
        .form__checked
        label.form__label(for="login_form__checkbox") Я человек

      legend.form__legend.login_form__legend Вы точно не робот?

      ul.clearfix.form__group.login_form__radio_wrap
        li.form__row.form__row-radio_wrap.login_form__radio_yes
          label.form__label(for="login_form__radio_yes") Да
          input.form__input(id="login_form__radio_yes" type="radio", name="login_form__radio")
          .form__checked
        li.form__row.form__row-radio_wrap
          label.form__label(for="login_form__radio_no") Не уверен
          input.form__input(id="login_form__radio_no" type="radio", name="login_form__radio")
          .form__checked

    .menu.header__menu.header__menu-float.form__menu.login_form__menu
      a#flip_2_front.menu__link.btn(href="index.html") На главную
      input.menu__link.btn(type="submit", value="Войти")
      //- li.menu__item.menu__item-for_main
      //-   a#flip_2_front.menu__link.btn(href="index.html") На главную
      //- li.menu__item.menu__item-for_main
      //-   input.menu__link.btn(type="submit", value="Войти")

    #form__error.form__error_wrap
      .form__error form__error

</template>

<script>
import addClasses from "../../mixins/addClasses";

export default {
  name: "LoginForm",
  mixins: [addClasses]
};
</script>
