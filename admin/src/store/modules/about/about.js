import axios from "axios";

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
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
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
    }
  }
};

export default about;
