<template>
  <div class="post-body">
    <div v-if="show">
      <h1>{{ postinfo.title }}</h1>
    </div>
    <div v-else>
      loading...
    </div>
    {{commentCount}} 评论
  </div>
</template>

<script>
  export default {
    name: 'PostBody',
    props: ['title', 'postId'],
    computed: {
      commentCount() {
        return this.$store.getters.getComments(this.postId).length
      },
      postinfo() {
        return this.$store.state.post.all.find(
          t => t.id === this.postId
        )
      },
      show() {
        return this.postinfo
      }
    }
  }
</script>


<style scoped>
  .post-body {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  h1 {
    text-align: center;
  }
</style>
