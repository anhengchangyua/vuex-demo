import axios from 'axios'

const state = {
  all: []
};

const mutations = {
  addCommentm(state, comment) {
    state.all.push(comment)
  }
  ,
  loadCommentsm(state, comments) {
    state.all = comments
  }
};

const actions = {

  addComment({commit, comment}) {
    commit("addCommentm", comment)
  },

  loadComments({commit}) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res => {
        let comments = res.data
        commit("loadCommentsm", comments)
      }
    );
  }
};

export default {
  state,
  mutations,
  actions
}

