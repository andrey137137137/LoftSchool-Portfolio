import axios from "axios";
import * as types from "../../common-mutation-types";

const dbPage = "skill";

const about = {
  state: {
    data: []
  },
  getters: {
    skills(state) {
      return state.data;
    }
  },
  mutations: {
    [types.SET](state, data) {
      state.data = data;
    },
    [types.ADD](state, newItem) {
      state.data.push(newItem);
    },
    [types.DELETE](state, id) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    getSkills({ state }) {
      // fetch("/src/store/modules/about/data.json")
      //   .then(data => {
      //     return data.json();
      //   })
      //   .then(responce => {
      //     state.data = responce;
      //   });
      axios.get(dbPage).then(response => {
        state.data = response.data.skills;
      });
    },
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  }
};

export default about;
