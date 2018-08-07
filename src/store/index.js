import Vue from 'vue'
import Vuex from 'vuex'
import comment from '../modules/comment.js'
import post from '../modules/post.js'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comment,
    post
  }

})
