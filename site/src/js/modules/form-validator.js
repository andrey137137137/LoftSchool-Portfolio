module.exports = function() {
  return {
    errorMessage: {
      id: "form__error",
      modificator: "form__error_wrap-active",
      elem: false,
      content: ""
    },

    elemModificator: "form__input-error",

    init: function(formID) {
      if (!document.getElementById(formID)) {
        return;
      }

      this.formID = formID;
      this.errorMessage.elem = document.getElementById(this.errorMessage.id);

      var self = this,
        onlySubmitChecking = false,
        elems = document.querySelectorAll("#" + this.formID + " .form__input");

      if (!onlySubmitChecking) {
        for (var i = 0, len = elems.length; i < len; i++) {
          elems[i].addEventListener("blur", function() {
            self.validate(this);
          });
        }
      }

      document
        .getElementById(this.formID)
        .addEventListener("submit", function(event) {
          event.preventDefault();

          for (var i = 0, len = elems.length; i < len; i++) {
            if (!self.validate(elems[i])) {
              return;
            }
          }

          this.submit();
        });
    },

    validate: function(elem) {
      var tag = elem.tagName.toLowerCase();
      var type;

      this.errorMessage.content = "";

      console.log(elem);

      switch (tag) {
        case "select":
          type = tag;
          break;

        default:
          type = elem.getAttribute("type") || "text";
      }

      switch (type) {
        case "select":
          this.validateSelect(elem);
          break;

        case "checkbox":
        case "radio":
        case "text":
          if (elem.name == this.formID + "_website") {
            this.validateWebAdress(elem);
          } else {
            this.validateText(elem);
          }
          break;

        case "email":
          this.validateEmail(elem);
          break;

        case "password":
          this.validatePassword(elem);
          break;
      }

      document.querySelector(
        "#" + this.errorMessage.id + " div"
      ).innerHTML = this.errorMessage.content;

      if (this.errorMessage.content) {
        this.errorMessage.elem.style.left = elem.offsetLeft + "px";
        this.errorMessage.elem.style.top =
          elem.offsetTop + elem.offsetHeight + "px";
        this.errorMessage.elem.classList.add(this.errorMessage.modificator);
        elem.classList.add(this.elemModificator);
        return false;
      }

      this.errorMessage.elem.style.top = "";
      this.errorMessage.elem.classList.remove(this.errorMessage.modificator);
      elem.classList.remove(this.elemModificator);

      return true;
    },

    trim: function(str) {
      var trimmingChar = " ",
        firstRestIndex,
        i,
        len = str.length;

      for (i = 0; i < len; i++) {
        if (str[i] != trimmingChar) {
          break;
        }
      }

      str = str.slice(i, len);
      len = str.length;

      if (str.lastIndexOf(trimmingChar) == len - 1) {
        for (i = len - 1; i >= 0; i--) {
          if (str[i] != trimmingChar) {
            break;
          }
        }
      }

      str = str.slice(0, i + 1);

      return str;
    },

    validateText: function(elem) {
      var str = elem.value;
      var reg = /^[a-z0-9 ]+$/;

      str = this.trim(str);

      elem.value = str;

      if (!str) {
        this.errorMessage.content = "Пустое поле!";
        return false;
      }

      if (!this.checkByRegExp(str, reg)) {
        this.errorMessage.content = "В поле введён недопустимый символ!";
        return false;
      }

      elem.value = str;
    },

    validatePassword: function(elem) {
      var str = elem.value;
      var reg = /^[a-z0-9 ]+$/;

      elem.value = str;

      if (!str) {
        this.errorMessage.content = "Пустое поле!";
        return false;
      }

      if (!this.checkByRegExp(str, reg)) {
        this.errorMessage.content = "В поле введён недопустимый символ!";
        return false;
      }

      elem.value = str;
    },

    validateEmail: function(elem) {
      var parts = elem.value.split("@");
      var len = parts.length;
      var address;
      var domain;
      var domainParts;
      var regAdr = /^[a-z0-9_-]{3,}$/i;

      if (len < 2) {
        this.errorMessage.content = "Нет символа @!";
        return false;
      }

      if (len > 3) {
        this.errorMessage.content = "Символ @ должен быть только один!";
        return false;
      }

      address = this.trim(parts[0]);
      domain = parts[1];

      elem.value = address + "@" + domain;

      if (!address) {
        this.errorMessage.content = "Не заполнен адрес почты!";
        return false;
      }

      if (!this.checkByRegExp(address, regAdr)) {
        this.errorMessage.content = "В адресе почты есть недопустимые символы!";
        return false;
      }

      domain = this.domainCheck(domain);

      if (!domain) {
        return false;
      }

      elem.value = address + "@" + domain;
    },

    validateWebAdress: function(elem) {
      var parts = elem.value.split(".", 2);
      var len = parts.length;
      var address;
      var domain;
      var domainParts;
      var regAdr = /^[a-z0-9_-]{3,}$/i;

      if (len < 2) {
        this.errorMessage.content = "Нет точки!";
        return false;
      }

      address = this.trim(parts[0]);
      domain = parts[1];

      elem.value = address + "." + domain;

      if (!address) {
        this.errorMessage.content = "Не заполнен адрес сайта!";
        return false;
      }

      if (!this.checkByRegExp(address, regAdr)) {
        this.errorMessage.content = "В адресе сайта есть недопустимые символы!";
        return false;
      }

      domain = this.domainCheck(domain, true);

      if (!domain) {
        return false;
      }

      elem.value = address + "." + domain;
    },

    domainCheck: function(str, notForEmail) {
      var domainParts = str.split(".");
      var len = domainParts.length;
      var minParts = 2;
      var regDom = /^[a-z]{2,}$/;

      notForEmail = notForEmail || false;

      if (notForEmail) {
        minParts = 1;
      }

      if (len < minParts) {
        this.errorMessage.content =
          "В домене должна быть как минимум одна точка!";
        return false;
      }

      for (var i = 0; i < len; i++) {
        domainParts[i] = this.trim(domainParts[i]);

        if (!domainParts[i]) {
          this.errorMessage.content = "Не заполнена одна из частей домена!";
          return false;
        }

        if (!this.checkByRegExp(domainParts[i], regDom, true)) {
          this.errorMessage.content = "В домене есть недопустимые символы!";
          return false;
        }
      }

      return domainParts.join(".");
    },

    checkByRegExp: function(str, regExp, caseSensetive) {
      caseSensetive = caseSensetive || false;

      if (!caseSensetive) {
        str = str.toLowerCase();
      }

      if (str.search(regExp) === -1) {
        return false;
      }

      return true;
    },

    hideErrorMessage: function() {
      // this.errorMessage.elem.style.top = '';
      this.errorMessage.elem.setAttribute("style", null);
      this.errorMessage.elem.classList.remove(this.errorMessage.modificator);
    }
  };
};
