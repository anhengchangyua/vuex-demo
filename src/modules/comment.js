import axios from 'axios'

const state = {
  all: []
};

const mutations = {
  addCommentm(state, comment) {
    state.all.push(comment)
  }
};

const actions = {
  addComment({commit}) {

    commit("addCommentm", comment)
  },
  loadComments({commit}){
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res =>{
        let comments = res.data
        commit("loadComments",comments)
      }
    );
  }
};

export default {
  state,
  mutations,
  actions
}

