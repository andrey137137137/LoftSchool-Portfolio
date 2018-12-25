import types from "../../constants/validation/types";
import wrapperClass from "../../mixins/wrapperClass";
import ErrorElem from "./ErrorElem";

export default {
  render(h) {
    let elems = [];
    let wrapperElem;

    if (this.label) {
      elems.push(this.labelElem(h));
    }

    elems.push(this.inputElem(h));

    if (this.measure) {
      elems.push(this.measureElem(h));
    }

    if (this.type === "number") {
      elems = [h("div", { class: "form__row" }, elems)];
    }
    // else {
    //   wrapperElem = elems;
    // }

    return h(
      "div",
      {
        class: ["form__wrap", `form__wrap-${this.type}`, ...this.wrapperClass]
      },
      [...elems, this.errorElem(h)]
    );
  },
  mixins: [wrapperClass],
  props: {
    val: {
      type: Object,
      required: true
    },
    value: {
      // type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    legend: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    measure: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      classes: {
        block: "form",
        elem: "input",
        modifs: {
          required: "required",
          error: "error",
          valid: "valid"
        }
      }
    };
  },
  computed: {
    // state: {
    //   get() {
    //     return this.value;
    //   },
    //   set(value) {
    //     this.val.$touch();
    //     let eventType;

    //     switch (this.type) {
    //       case types.native.checkbox:
    //         eventType = "box-checked";
    //         break;
    //       case types.native.radio:
    //         eventType = "radio-changed";
    //         break;
    //       default:
    //         eventType = "input";
    //     }

    //     this.$emit(eventType, value);
    //   }
    // },
    // getType() {
    //   return this.type;
    // },
    isEmptyRequired() {
      // return this.val.$error && !this.state;
      return this.val.$error && !this.value;
    },
    errorType() {
      if (this.isEmptyRequired) {
        return "required";
      }

      if (this.val.$error) {
        return this.type;
      }

      return "";
    },
    validationClass() {
      const baseClass = `${this.classes.block}__${this.classes.elem}-`;

      return {
        [baseClass + this.classes.modifs.error]: this.val.$error,
        [baseClass + this.classes.modifs.valid]: !this.val.$invalid
      };
    }
  },
  methods: {
    labelElem(h) {
      return <label class="form__label">{this.label}</label>;
    },
    errorElem(h) {
      return <ErrorElem type={this.errorType} />;
    },
    measureElem(h) {
      return <span class="form__measure">{this.measure}</span>;
    },
    inputElem(h) {
      const self = this;
      const attrs = {
        placeholder: this.placeholder
      };
      let formElem = "";

      if (this.type === "textarea") {
        formElem = this.type;
      } else {
        formElem = "input";
        attrs.type = this.type;
      }

      return h(formElem, {
        class: {
          form__input: true,
          ...this.validationClass
        },
        attrs,
        domProps: {
          value: this.value
        },
        on: {
          input(e) {
            self.val.$touch();
            self.$emit("input", e.target.value);
          }
        },
        nativeOn: {
          blur: this.val.$touch()
        }
      });
    }
  }
};
