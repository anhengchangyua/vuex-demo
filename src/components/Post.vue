<template>
  <div class="post">
    <div class="upper">
      <PostBody :title='title' :postId='postId'/>
    </div>
    <div class="bottom">
      <CommentBox/>
    </div>
  </div>
</template>


<script>
  import PostBody from './PostBody.vue'
  import CommentBox from './CommentBox.vue'

  export default {
    name: 'Post',
    components: {
      PostBody,
      CommentBox
    },
    data: () => (
      {
        title: "react 技术"
      }
    ),
    computed: {
      postId() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>
  .post {
    background-color: #00bcd4;
  }

  .upper {
    display: flex;
    min-height: 40vh;
    background-color: #00bcd4;
  }

  .bottom {
    display: flex;
    flex-grow: 1;
    background-color: rgba(240, 240, 240, .5);
  }
</style>

