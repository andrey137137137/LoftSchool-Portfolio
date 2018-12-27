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
      // fetch("src/store/modules/blog/data.json")
      //   .then(data => {
      //     return data.json();
      //   })
      //   .then(responce => {
      //     console.log(responce);
      //     state.data = responce;
      //   });
      axios.get(dbPage).then(response => {
        commit(types.SET, response.data.posts);
      });
    },
    createPost({ dispatch }, data) {
      axios.post(dbPage, data).then(response => {
        console.log(response);
        // state.data.push(post);
        dispatch("getPosts");
      });
    },
    updatePost({ dispatch }, post) {
      axios.put(`${dbPage}/${post.id}`, post.data).then(response => {
        console.log(response);
        // state.data.push(post);
        dispatch("getPosts");
      });
    },
    deletePost({ dispatch }, id) {
      // state.data = state.data.filter(item => item._id !== id);
      axios.delete(`${dbPage}/${id}`).then(response => {
        console.log(response);
        dispatch("getPosts");
      });
    }
  }
};

export default blog;
