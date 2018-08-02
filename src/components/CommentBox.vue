<template>
  <div class="comment-box">
    <div class="comment-form">
      <input v-model="message" placeholder="请填写评论"/>
      <button @click="onSubmitB">提交</button>
    </div>

    <div :key="comment.id" v-for="comment in reversedComments">
      {{comment.body}}
    </div>
  </div>


</template>

<script>
  export default {
    name: 'CommentBox',
    data: () => ({
      message: ''
    }),
    computed: {
      comments() {
        return this.$store.state.comment.all
      }
      ,
      reversedComments() {
        return this.comments.slice().reverse();
      }
    },
    methods: {
      onSubmitB() {
        let comment = {
          id: 2,
          body: this.message
        };
//        this.$store.commit("addComment", comment);//同步请求
        this.$store.dispatch({type: "addComment", comment});//DISPATCH
        this.message = ''
      }
    }

  }
</script>


<style scoped>
  .comment-box {
    background-color: #fff;
    width: 400px;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  .comment-box {
    padding: 20px;
  }

  .comment-form {
    display: flex;
    margin-bottom: 20px;
  }

  .comment-form input {
    flex-grow: 1;
  }

  .comment-form button {
    margin-left: 5px;
  }
</style>
