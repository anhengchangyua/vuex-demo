const state = {
  all: [
    {
      id: '1',
      body: '12222222'
    }, {
      id: '2',
      body: '233333333'
    }
  ]
};

const mutations = {
  addCommentm(state, comment) {
    state.all.push(comment)
  }
};

const actions = {
  addComment({commit}, {comment}) {
    commit("addCommentm", comment)
  }
};

export default {
  state,
  mutations,
  actions
}

