import axios from 'axios'

const state = {

  all: []

};


const mutations = {

  getPosts(state, posts) {
    state.all = posts
  }

};


const actions = {

  getAllPosts({commit}) {
    const uri = "http://localhost:3008/posts";
    axios.get(uri).then(
      res => {
        console.log(res.data);
        commit('getPosts', res.data)
      }
    )
  }

};

export default {
  state,
  mutations,
  actions
}
