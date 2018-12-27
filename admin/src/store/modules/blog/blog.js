import axios from "axios";
import * as types from "../../common-mutation-types";

const dbPage = "post";

const blog = {
  state: {
    data: []
  },
  getters: {
    posts(state) {
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
    getPosts({ commit }) {
      axios.get(dbPage).then(response => {
        commit(types.SET, response.data.posts);
      });
    },
    createPost({ dispatch }, data) {
      axios.post(dbPage, data).then(response => {
        dispatch("getPosts");
      });
    },
    updatePost({ dispatch }, post) {
      axios.put(`${dbPage}/${post.id}`, post.data).then(response => {
        dispatch("getPosts");
      });
    },
    deletePost({ dispatch }, id) {
      axios.delete(`${dbPage}/${id}`).then(response => {
        dispatch("getPosts");
      });
    }
  }
};

export default blog;
