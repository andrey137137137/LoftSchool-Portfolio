<template lang="pug">
  ul.section.footer_top
    li.container.footer_top__container

      p.col.col-ds_float.col-ds_4.col-xds_4.section__desc.footer_top__col.footer_top__desc Этот сайт я делаю в рамках обучения в Школе онлайн образования LoftSchool.

      NavCmp

      ul.col.col-tb_float.col-tb_6.col-ds_3.col-xds_4.footer_top__col.footer_top__contacts_list
        li.footer_top__contacts_item(v-for="item in contacts" :key="item.link")
          a.footer_top__contacts_link(:href="item.link" target="_blank") {{item.text}}
</template>

<script>
export default {
  name: "FooterTop",
  data() {
    return {
      contacts: [
        {
          icon: "skype",
          text: "andrey27x777@gmail.com",
          link: "skype:andrey27x777@gmail.com"
        },
        {
          icon: "envelope",
          text: "andrey27x777@gmail.com",
          link: "mailto: andrey27x777@gmail.com"
        },
        {
          icon: "phone",
          text: "...",
          link: ""
        },
        {
          icon: "map_marker",
          text: "Одесса",
          link:
            "https://www.google.com.ua/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D0%BE%D0%BF%D0%B5%D1%80%D1%8B+%D0%B8+%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D0%B0/@46.4854787,30.7402854,18z/data=!4m13!1m7!3m6!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!3b1!8m2!3d46.482526!4d30.7233095!3m4!1s0x40c631985b45cb0b:0x6e315e968e5b2a42!8m2!3d46.4854787!4d30.7411794"
        }
      ]
    };
  }
};
</script>
