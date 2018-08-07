import axios from 'axios'

const state = {
  all: []
};

const mutations = {
  addCommentm(state, comment) {
    state.all.push(comment)
  },
  loadCommentsm(state, comments) {
    state.all = comments
  }
};

const actions = {

  addComment({commit}, {comment}) {
    const uri = 'http://localhost:3008/comments'
    const {body, post} = comment;
    axios.post(uri, {body, post}).then(
      res => {
        console.log('res.data', res.data)
        const comment = res.data
        commit("addCommentm", comment)
      }
    )
  },

  loadComments({commit}) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res => {
        let comments = res.data
        commit("loadCommentsm", comments)
      }
    );
  },

};

const getters = {
  getComments: (state) => (id) => {
    return state.all.filter(
      t => t.post === id
    )
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

