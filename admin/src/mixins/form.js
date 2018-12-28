import types from "../constants/validation/types.js";

export default {
  validations() {
    return this.fields;
  },
  methods: {
    getValue(value, type) {
      if (typeof value !== "undefined") {
        return value;
      }

      switch (type) {
        case types.native.checkbox:
          return false;
        case types.native.radio:
          return 0;
        default:
          return "";
      }
    }
  }
};
