import axios from "axios";

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
    createPost({ state, actions }, postBody) {
      axios.post(dbPage, postBody).then(response => {
        console.log(response);
        // state.data.push(post);
        // actions.getPosts({ state });
      });
    },
    deletePost({ state }, id) {
      // state.data = state.data.filter(item => item._id !== id);
      axios.delete(`${dbPage}/${id}`).then(response => {
        console.log(response);
        // actions.getPosts({ state });
      });
    }
  },
  actions: {
    getPosts({ state }) {
      // fetch("src/store/modules/blog/data.json")
      //   .then(data => {
      //     return data.json();
      //   })
      //   .then(responce => {
      //     console.log(responce);
      //     state.data = responce;
      //   });
      axios.get(dbPage).then(response => {
        state.data = response.data.posts;
      });
    }
  }
};

export default blog;
